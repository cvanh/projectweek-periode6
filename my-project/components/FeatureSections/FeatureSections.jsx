/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
    {
        name: 'Fast Delivery',
        description:
            "We ship fast, within the EU 1 - 4 days and outside EU 2 - 7 days. Due to the covid pandemic some shipments may will delay, after 7 days when you received your track & trace code and still didn't receive your package. Please conact us! ",
        icon: GlobeAltIcon,
    },
    {
        name: 'Worldwide Shipping',
        description:
            'We ship allround the world, please make sure to read the "Fast Delivery" to know your shipment information!',
        icon: ScaleIcon,
    },
    {
        name: 'Good Quality',
        description:
            'All our products are from good quality and are tested before we putted in our product range, if you still have any issues with your product please contact us through the contact form on our contact page.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Every Day Service',
        description:
            "By any issue please dont hasted and contact our support team, our number one goal is that we can help our customers!",
        icon: AnnotationIcon,
    },
]

export default function FeatureSections() {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Muziek Winkel
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}