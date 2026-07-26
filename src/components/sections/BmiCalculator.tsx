import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, Activity, Flame, Zap, Target, Droplets, Dumbbell, Sparkles } from 'lucide-react';
import { BmiResult } from '../../types';

export const BmiCalculator: React.FC = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(28);
  const [heightCm, setHeightCm] = useState<number>(178);
  const [weightKg, setWeightKg] = useState<number>(76);

  // Imperial states
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(10);
  const [weightLbs, setWeightLbs] = useState<number>(168);

  const [activityLevel, setActivityLevel] = useState<number>(1.55); // Moderate

  // Realtime calculated values
  const bmiResult: BmiResult = useMemo(() => {
    let weightInKg = weightKg;
    let heightInMeters = heightCm / 100;

    if (unitSystem === 'imperial') {
      const totalInches = heightFeet * 12 + heightInches;
      heightInMeters = (totalInches * 2.54) / 100;
      weightInKg = weightLbs * 0.453592;
    }

    if (heightInMeters <= 0) heightInMeters = 1.75;
    if (weightInKg <= 0) weightInKg = 70;

    const bmi = parseFloat((weightInKg / (heightInMeters * heightInMeters)).toFixed(1));

    let category: 'Underweight' | 'Normal' | 'Overweight' | 'Obese' = 'Normal';
    let categoryColor = '#A3FF12'; // Gym Station Signature Lime

    if (bmi < 18.5) {
      category = 'Underweight';
      categoryColor = '#3B82F6'; // Electric Blue
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal';
      categoryColor = '#A3FF12'; // Signature Neon Lime
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Overweight';
      categoryColor = '#F59E0B'; // Amber
    } else {
      category = 'Obese';
      categoryColor = '#EF4444'; // Red
    }

    // Ideal Weight Range (18.5 - 24.9 BMI)
    const minIdealKg = parseFloat((18.5 * heightInMeters * heightInMeters).toFixed(1));
    const maxIdealKg = parseFloat((24.9 * heightInMeters * heightInMeters).toFixed(1));

    const idealWeightRange = unitSystem === 'metric'
      ? `${minIdealKg} kg – ${maxIdealKg} kg`
      : `${Math.round(minIdealKg * 2.20462)} lbs – ${Math.round(maxIdealKg * 2.20462)} lbs`;

    // BMR (Mifflin-St Jeor Equation)
    let bmr = 10 * weightInKg + 6.25 * (heightInMeters * 100) - 5 * age;
    if (gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }
    bmr = Math.round(bmr);

    // TDEE
    const tdee = Math.round(bmr * activityLevel);

    // Recommended Daily Water (Liters) = weight in kg * 0.035
    const waterLitres = (weightInKg * 0.035).toFixed(1);

    // Protein target (grams) = ~2.0g per kg for athletes
    const proteinGrams = Math.round(weightInKg * 2.0);

    return {
      bmi,
      category,
      categoryColor,
      idealWeightRange,
      bmr,
      tdee,
      waterLitres,
      proteinGrams,
      recommendations: []
    };
  }, [unitSystem, gender, age, heightCm, weightKg, heightFeet, heightInches, weightLbs, activityLevel]);

  // Helper for scale percentage (range 14 to 40)
  const markerPercent = useMemo(() => {
    const minBmi = 14;
    const maxBmi = 40;
    const clamped = Math.min(Math.max(bmiResult.bmi, minBmi), maxBmi);
    return ((clamped - minBmi) / (maxBmi - minBmi)) * 100;
  }, [bmiResult.bmi]);

  return (
    <section id="bmi-calculator" className="py-24 bg-[#050505] text-white border-t border-[#1B1B1B] relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#A3FF12] opacity-[0.025] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#262626] text-[#A3FF12] text-xs font-bold uppercase tracking-widest shadow-md">
            <Calculator className="w-3.5 h-3.5" />
            <span>CLINICAL METABOLIC ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            BIOMETRIC & <span className="text-[#A3FF12]">METABOLIC SCANNER</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Adjust your metrics below to evaluate your Body Mass Index, Basal Metabolic Rate (BMR), and Total Daily Energy Needs in real time.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form Side */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#262626] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            {/* Unit System & Gender Toggles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider block mb-2">Unit System</label>
                <div className="bg-[#080808] p-1.5 rounded-xl border border-[#262626] flex">
                  <button
                    type="button"
                    onClick={() => setUnitSystem('metric')}
                    className={`flex-1 py-2 text-xs font-black uppercase rounded-lg transition-all cursor-pointer ${
                      unitSystem === 'metric' ? 'bg-[#A3FF12] text-black shadow-lg' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Metric (kg / cm)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnitSystem('imperial')}
                    className={`flex-1 py-2 text-xs font-black uppercase rounded-lg transition-all cursor-pointer ${
                      unitSystem === 'imperial' ? 'bg-[#A3FF12] text-black shadow-lg' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Imperial (lbs / ft)
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider block mb-2">Gender</label>
                <div className="bg-[#080808] p-1.5 rounded-xl border border-[#262626] flex">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`flex-1 py-2 text-xs font-black uppercase rounded-lg transition-all cursor-pointer ${
                      gender === 'male' ? 'bg-[#222222] text-[#A3FF12] border border-[#333]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`flex-1 py-2 text-xs font-black uppercase rounded-lg transition-all cursor-pointer ${
                      gender === 'female' ? 'bg-[#222222] text-[#A3FF12] border border-[#333]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>
            </div>

            {/* Sliders Block */}
            <div className="space-y-6 pt-2">
              {/* Age Slider */}
              <div className="bg-[#080808] p-4 rounded-2xl border border-[#222222] space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-extrabold text-gray-300 uppercase tracking-wider">Age</label>
                  <span className="text-sm font-black text-[#A3FF12] font-mono bg-[#111111] px-3 py-1 rounded-lg border border-[#262626]">
                    {age} YRS
                  </span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value))}
                  className="w-full accent-[#A3FF12] bg-[#222] rounded-lg h-2 cursor-pointer"
                />
              </div>

              {/* Height Control */}
              <div className="bg-[#080808] p-4 rounded-2xl border border-[#222222] space-y-3">
                {unitSystem === 'metric' ? (
                  <>
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-extrabold text-gray-300 uppercase tracking-wider">Height</label>
                      <span className="text-sm font-black text-[#A3FF12] font-mono bg-[#111111] px-3 py-1 rounded-lg border border-[#262626]">
                        {heightCm} CM
                      </span>
                    </div>
                    <input
                      type="range"
                      min="140"
                      max="220"
                      value={heightCm}
                      onChange={(e) => setHeightCm(parseInt(e.target.value))}
                      className="w-full accent-[#A3FF12] bg-[#222] rounded-lg h-2 cursor-pointer"
                    />
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold text-gray-300 uppercase block mb-1">Feet</label>
                      <input
                        type="number"
                        value={heightFeet}
                        onChange={(e) => setHeightFeet(parseInt(e.target.value) || 0)}
                        className="w-full p-3 bg-[#111111] border border-[#262626] rounded-xl text-white font-mono font-bold text-sm focus:outline-none focus:border-[#A3FF12]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-extrabold text-gray-300 uppercase block mb-1">Inches</label>
                      <input
                        type="number"
                        value={heightInches}
                        onChange={(e) => setHeightInches(parseInt(e.target.value) || 0)}
                        className="w-full p-3 bg-[#111111] border border-[#262626] rounded-xl text-white font-mono font-bold text-sm focus:outline-none focus:border-[#A3FF12]"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Weight Control */}
              <div className="bg-[#080808] p-4 rounded-2xl border border-[#222222] space-y-3">
                {unitSystem === 'metric' ? (
                  <>
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-extrabold text-gray-300 uppercase tracking-wider">Weight</label>
                      <span className="text-sm font-black text-[#A3FF12] font-mono bg-[#111111] px-3 py-1 rounded-lg border border-[#262626]">
                        {weightKg} KG
                      </span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="160"
                      value={weightKg}
                      onChange={(e) => setWeightKg(parseInt(e.target.value))}
                      className="w-full accent-[#A3FF12] bg-[#222] rounded-lg h-2 cursor-pointer"
                    />
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-extrabold text-gray-300 uppercase tracking-wider">Weight</label>
                      <span className="text-sm font-black text-[#A3FF12] font-mono bg-[#111111] px-3 py-1 rounded-lg border border-[#262626]">
                        {weightLbs} LBS
                      </span>
                    </div>
                    <input
                      type="range"
                      min="90"
                      max="350"
                      value={weightLbs}
                      onChange={(e) => setWeightLbs(parseInt(e.target.value))}
                      className="w-full accent-[#A3FF12] bg-[#222] rounded-lg h-2 cursor-pointer"
                    />
                  </>
                )}
              </div>

              {/* Activity Factor Select */}
              <div className="bg-[#080808] p-4 rounded-2xl border border-[#222222] space-y-2">
                <label className="text-xs font-extrabold text-gray-300 uppercase tracking-wider block">
                  Daily Physical Activity Level
                </label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(parseFloat(e.target.value))}
                  className="w-full p-3.5 bg-[#111111] border border-[#262626] rounded-xl text-xs font-bold text-white uppercase focus:outline-none focus:border-[#A3FF12]"
                >
                  <option value={1.2}>Sedentary (Little or no exercise)</option>
                  <option value={1.375}>Lightly Active (1–3 sessions / week)</option>
                  <option value={1.55}>Moderately Active (3–5 sessions / week)</option>
                  <option value={1.725}>Very Active (6–7 intense workouts / week)</option>
                  <option value={1.9}>Extra Active (Competitive athlete / double sessions)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Output & Refined Gauge Bar Side */}
          <div className="lg:col-span-5 bg-[#111111] border border-[#262626] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#262626] pb-4">
              <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#A3FF12]" />
                <span>METABOLIC PROFILE</span>
              </h3>
              <span className="text-[10px] font-mono text-[#A3FF12] bg-[#A3FF12]/10 border border-[#A3FF12]/30 px-2.5 py-1 rounded-full uppercase font-bold tracking-wider">
                LIVE METRICS
              </span>
            </div>

            {/* Main Primary BMI Card */}
            <div className="p-6 rounded-2xl bg-[#080808] border border-[#262626] text-center space-y-3 relative overflow-hidden">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400 block">
                YOUR BODY MASS INDEX
              </span>

              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl font-black tracking-tight font-mono" style={{ color: bmiResult.categoryColor }}>
                  {bmiResult.bmi}
                </span>
                <span className="text-xs text-gray-500 font-black uppercase">BMI</span>
              </div>

              <div
                className="inline-block px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-black shadow-lg"
                style={{ backgroundColor: bmiResult.categoryColor }}
              >
                CLASSIFICATION: {bmiResult.category}
              </div>
            </div>

            {/* ELEGANT HIGH-PRECISION BMI SPECTRUM BAR */}
            <div className="space-y-4 bg-[#080808] border border-[#262626] rounded-2xl p-5">
              <div className="flex items-center justify-between text-xs font-bold text-gray-300 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#A3FF12]" />
                  <span>BMI SPECTRUM GAUGE</span>
                </span>
                <span className="font-mono text-[#A3FF12] text-xs font-bold">{bmiResult.bmi} / 40.0</span>
              </div>

              {/* Track Area */}
              <div className="relative pt-8 pb-2">
                {/* Dynamic Floating Pointer */}
                <motion.div
                  className="absolute top-0 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
                  animate={{ left: `${markerPercent}%` }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                >
                  <div 
                    className="px-2.5 py-1 rounded-md text-[11px] font-black font-mono shadow-xl text-black uppercase whitespace-nowrap mb-1 flex items-center gap-1 border border-black/20"
                    style={{ backgroundColor: bmiResult.categoryColor }}
                  >
                    <span>{bmiResult.bmi}</span>
                  </div>
                  <div 
                    className="w-3 h-3 rotate-45 -mt-2 border-r border-b border-black/30 shadow-md"
                    style={{ backgroundColor: bmiResult.categoryColor }}
                  />
                </motion.div>

                {/* Multi-Segment Color Scale Bar */}
                <div className="h-4 w-full rounded-full bg-[#181818] p-0.5 border border-[#262626] flex overflow-hidden relative shadow-inner">
                  {/* Glowing Laser Pointer Indicator */}
                  <motion.div
                    className="absolute top-0 bottom-0 w-1 bg-white z-10 shadow-[0_0_12px_#ffffff]"
                    animate={{ left: `${markerPercent}%` }}
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />

                  {/* Underweight Segment (< 18.5) */}
                  <div
                    className={`h-full rounded-l-full transition-all duration-300 ${
                      bmiResult.category === 'Underweight' ? 'opacity-100 ring-2 ring-blue-400 z-1' : 'opacity-40'
                    }`}
                    style={{ width: `${((18.5 - 14) / 26) * 100}%`, backgroundColor: '#3B82F6' }}
                  />

                  {/* Normal Segment (18.5 - 24.9) */}
                  <div
                    className={`h-full transition-all duration-300 ${
                      bmiResult.category === 'Normal' ? 'opacity-100 ring-2 ring-[#A3FF12] z-1' : 'opacity-40'
                    }`}
                    style={{ width: `${((25 - 18.5) / 26) * 100}%`, backgroundColor: '#A3FF12' }}
                  />

                  {/* Overweight Segment (25.0 - 29.9) */}
                  <div
                    className={`h-full transition-all duration-300 ${
                      bmiResult.category === 'Overweight' ? 'opacity-100 ring-2 ring-amber-400 z-1' : 'opacity-40'
                    }`}
                    style={{ width: `${((30 - 25) / 26) * 100}%`, backgroundColor: '#F59E0B' }}
                  />

                  {/* Obese Segment (30.0+) */}
                  <div
                    className={`h-full rounded-r-full transition-all duration-300 ${
                      bmiResult.category === 'Obese' ? 'opacity-100 ring-2 ring-red-500 z-1' : 'opacity-40'
                    }`}
                    style={{ width: `${((40 - 30) / 26) * 100}%`, backgroundColor: '#EF4444' }}
                  />
                </div>

                {/* Range Labels below the bar */}
                <div className="grid grid-cols-4 text-center text-[10px] text-gray-400 font-mono mt-3 pt-2 border-t border-[#1D1D1D]">
                  <div className="text-left">
                    <span className="block text-blue-400 font-bold">Underweight</span>
                    <span className="text-[9px] text-gray-500">&lt; 18.5</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-[#A3FF12] font-bold">Optimal</span>
                    <span className="text-[9px] text-gray-500">18.5 – 24.9</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-amber-400 font-bold">Overweight</span>
                    <span className="text-[9px] text-gray-500">25.0 – 29.9</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-red-400 font-bold">Obese</span>
                    <span className="text-[9px] text-gray-500">30.0+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BMR & TDEE Primary Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#080808] border border-[#262626] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-extrabold uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>BMR Baseline</span>
                </div>
                <div className="text-2xl font-black text-white font-mono">{bmiResult.bmr}</div>
                <span className="text-[10px] text-gray-500 block font-medium">Resting Caloric Burn (Kcal/day)</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#080808] border border-[#262626] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-extrabold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-[#A3FF12]" />
                  <span>TDEE Maintenance</span>
                </div>
                <div className="text-2xl font-black text-[#A3FF12] font-mono">{bmiResult.tdee}</div>
                <span className="text-[10px] text-gray-500 block font-medium">Total Daily Needs (Kcal/day)</span>
              </div>
            </div>

            {/* Target Weight & Daily Water Hydration Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#080808] border border-[#262626] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-extrabold uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5 text-[#A3FF12]" />
                  <span>Ideal Weight Range</span>
                </div>
                <div className="text-sm font-black text-[#A3FF12] font-mono">{bmiResult.idealWeightRange}</div>
                <span className="text-[10px] text-gray-500 block font-medium">Optimal BMI 18.5 – 24.9</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#080808] border border-[#262626] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-extrabold uppercase tracking-wider">
                  <Droplets className="w-3.5 h-3.5 text-blue-400" />
                  <span>Daily Hydration Target</span>
                </div>
                <div className="text-sm font-black text-blue-400 font-mono">{bmiResult.waterLitres} Liters / Day</div>
                <span className="text-[10px] text-gray-500 block font-medium">Optimal Athletic Fluid intake</span>
              </div>
            </div>

            {/* Daily Protein Target Banner */}
            <div className="p-4 rounded-2xl bg-[#080808] border border-[#262626] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#A3FF12]/10 border border-[#A3FF12]/30 flex items-center justify-center text-[#A3FF12]">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-300 block">
                    Daily Athletic Protein Goal
                  </span>
                  <span className="text-[10px] text-gray-500 block">Based on 2.0g per kg target for lean tissue synthesis</span>
                </div>
              </div>
              <span className="font-mono font-black text-[#A3FF12] text-base">{bmiResult.proteinGrams}g</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
