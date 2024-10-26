'use client'

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Brain, Activity } from "lucide-react"

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-600">harmONIC</div>
          <div className="space-x-4">
            <a href="#features" className="text-gray-600 hover:text-teal-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-teal-600">How It Works</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
          harmONIC: Algorithmically-driven Nicotine Cessation Device
          </h1>
          <div className="flex justify-center mb-12">
            {/* <img
              src="smart_patches/nicpatch2.png"
              alt="Smart Nicotine Patch"
              className="rounded-lg shadow-lg"
            /> */}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Brain className="w-12 h-12 text-teal-600" />}
                title="Accelerated Recovery Times"
                description="Reduces nicotine dependency much faster than traditional nicotine patches"
              />
              <FeatureCard
                icon={<Brain className="w-12 h-12 text-teal-600" />}
                title="Higher Efficacy"
                description="Higher chance of ending addiction"
              />
              <FeatureCard
                icon={<Activity className="w-12 h-12 text-teal-600" />}
                title="Progress Tracking"
                description="Monitor your quitting journey with detailed analytics"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">How It Works</h2>
            <div className="max-w-3xl mx-auto">
              <ol className="relative border-l border-gray-200">
                <TimelineItem
                  step={1}
                  title="Connect Devices"
                  description="Pair the patch and your compatible smartwatch with the harmONIC app."
                />
                <TimelineItem
                  step={2}
                  title="Wear Patch"
                  description="Follow the instructions!"
                />
                <TimelineItem
                  step={3}
                  title="Track Progress"
                  description="Monitor craving intensity, calculate stress levels, and provide feedback through the app."
                />
                <TimelineItem
                  step={4}
                  title="Receive Personalized Support"
                  description="Benefit from AI recommendations, communities of fellow quitters, and healthcare professionals through telehealth services."
                />
                <TimelineItem
                  step={5}
                  title="Celebrate Success"
                  description="Track your achievements and milestones as you progress towards a nicotine-free life."
                />
              </ol>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Harm0NIC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="mb-4 flex justify-center">{icon}</div>
        <CardTitle className="mb-2">{title}</CardTitle>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

interface TimelineItemProps {
  step: number;
  title: string;
  description: string;
}

function TimelineItem({ step, title, description }: TimelineItemProps) {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-teal-600 rounded-full -left-4 ring-4 ring-white">
        {step}
      </span>
      <h3 className="font-medium leading-tight">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </li>
  )
}

