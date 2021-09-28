import Image from 'next/image'

type FeatureCardProps = {
  title: string
  description: string
  icon: string
  alt: string
}

const FeatureCard = ({ title, description, icon, alt }: FeatureCardProps) => {
  console.log(icon)
  return (
    <div className="bg-brand-gray p-8 rounded-xl space-y-2">
      <div className="w-8 h-8 mb-2">
        <Image src={icon} alt={alt} />
      </div>

      <div className="font-bold text-white">{title}</div>
      <div>{description}</div>
    </div>
  )
}

export default FeatureCard
