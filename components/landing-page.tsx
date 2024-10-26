'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Watch, Brain, Activity, ChevronDown } from "lucide-react"

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-600">Harm0NIC</div>
          <div className="space-x-4">
            <a href="#features" className="text-gray-600 hover:text-teal-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-teal-600">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-teal-600">Pricing</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
  <h1 className="text-5xl font-bold mb-6 text-gray-800">
    Algorithmically-driven Nicotine Cessation Device
  </h1>
  <p className="text-xl mb-8 text-gray-600">
    The world&apos;s first AI-powered nicotine patch that adapts to your needs
  </p>
  <div className="flex justify-center mb-12">
    {/* <img
      src="smart_patches/nicpatch2.png"
      alt="Smart Nicotine Patch"
      className="rounded-lg shadow-lg"
    /> */}
  </div>
  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
    Pre-order Now
  </Button>
</section>

        {/* Features Section */}
        <section id="features" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Watch className="w-12 h-12 text-teal-600" />}
                title="Apple Watch Integration"
                description="Syncs with your Apple Watch to gather real-time biometric data"
              />
              <FeatureCard
                icon={<Brain className="w-12 h-12 text-teal-600" />}
                title="AI-Powered Dosing"
                description="Delivers precise nicotine doses based on your body&apos;s needs"
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
                  title="Personalize Settings"
                  description="Input your current nicotine intake and set your desired quitting timeline."
                />
                <TimelineItem
                  step={3}
                  title="Wear Patch"
                  description="Follow the instructions!"
                />
                <TimelineItem
                  step={4}
                  title="Track Progress"
                  description="Monitor craving intensity, calculate stress levels, and provide feedback through the app."
                />
                <TimelineItem
                  step={5}
                  title="Receive Personalized Support"
                  description="Benefit from AI recommendations, communities of fellow quitters, and healthcare professionals through telehealth services."
                />
                <TimelineItem
                  step={6}
                  title="Celebrate Success"
                  description="Track your achievements and milestones as you progress towards a nicotine-free life."
                />
              </ol>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Pricing</h2>
            <div className="max-w-sm mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">Harm0NIC Starter Kit</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold mb-4"></p>
                  <ul className="text-left mb-6">
                    <li className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-2" />
                      1-month supply of Harm0NICes
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-2" />
                      Free Apple Watch app
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-2" />
                      24/7 customer support
                    </li>
                  </ul>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <FaqItem
                question="Is Harm0NIC safe to use?"
                answer="Yes, Harm0NIC is designed with your safety in mind. It has undergone rigorous testing and is FDA-approved for smoking cessation."
              />
              <FaqItem
                question="How long does each patch last?"
                answer="Each Harm0NIC is designed to be worn for 24 hours. After that, you should apply a new patch to a different area of skin."
              />
              <FaqItem
                question="Can I use Harm0NIC without an Apple Watch?"
                answer="While Harm0NIC works best with an Apple Watch for personalized dosing, it can also be used without one. In this case, it will function similarly to a standard nicotine patch."
              />
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

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="mb-6">
      <h3 className="flex items-center text-lg font-medium mb-2">
        <ChevronDown className="w-5 h-5 mr-2 text-teal-600" />
        {question}
      </h3>
      <p className="text-gray-600 ml-7">{answer}</p>
    </div>
  )
}