"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Inter, Poppins } from "next/font/google";
import { useParams } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

interface RelatedPost {
  title: string;
  slug: string;
  featuredImage?: string;
}

interface Comment {
  id: number;
  text: string;
  timestamp: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  content: string;
  featuredImage: string;
  relatedPosts: RelatedPost[];
}

const TwitterIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.923 4.923 0 004.6 3.419A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.213-.005-.426-.014-.637A10.025 10.025 0 0024 4.557z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
  </svg>
);

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Solar Technology",
    excerpt:
      "Discover the latest advancements in solar panel efficiency and design.",
    date: "2024-05-15",
    category: "Solar Tech",
    slug: "future-of-solar-technology",
    featuredImage: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
    content: `
      Solar technology is at the forefront of the renewable energy revolution, promising a cleaner and more sustainable future. With global demand for clean energy soaring, researchers and engineers are pushing the boundaries of solar panel efficiency, durability, and versatility. This article explores the latest advancements shaping the future of solar technology and their potential to transform our energy landscape.

      ### Perovskite Solar Cells: A Game-Changer
      Perovskite solar cells have emerged as a breakthrough in photovoltaic technology. These cells use a unique crystal structure that allows them to absorb a broader spectrum of sunlight compared to traditional silicon-based panels.
      - **High Efficiency**: Perovskite cells have achieved efficiencies exceeding 25% in lab settings, rivaling silicon panels.
      - **Low Cost**: They can be manufactured using inexpensive materials and simple processes, reducing production costs.
      - **Challenges**: Stability and scalability remain hurdles, but ongoing research is addressing these issues with protective coatings and hybrid designs.

      ### Bifacial Solar Panels: Double-Sided Power
      Bifacial solar panels are designed to capture sunlight on both sides, significantly boosting energy output.
      - **Increased Yield**: By reflecting light from surfaces like rooftops or ground cover, bifacial panels can generate up to 30% more energy.
      - **Versatile Applications**: Ideal for large-scale solar farms and urban installations where reflective surfaces are common.
      - **Market Growth**: The bifacial market is projected to grow rapidly as costs decline and efficiency improves.

      ### Transparent Solar Panels: Windows as Power Generators
      Transparent solar panels are an innovative solution for integrating solar energy into buildings without altering aesthetics.
      - **Building Integration**: These panels can be embedded in windows, skylights, or glass facades, turning structures into power generators.
      - **Efficiency Trade-Off**: While less efficient than traditional panels, their seamless integration offers unique opportunities for urban energy production.
      - **Future Potential**: Advances in organic photovoltaics are improving transparency and efficiency, making them viable for widespread use.

      ### Smart Solar Systems: AI and IoT Integration
      The integration of artificial intelligence (AI) and the Internet of Things (IoT) is enhancing solar system performance.
      - **Predictive Maintenance**: AI algorithms monitor panel health, predicting failures before they occur.
      - **Optimized Energy Output**: IoT devices adjust panel angles in real-time to maximize sunlight capture.
      - **Grid Integration**: Smart systems enable better coordination with energy grids, supporting demand-response strategies.

      ### Environmental and Economic Impacts
      The advancements in solar technology are not only technical but also have profound environmental and economic implications.
      - **Reduced Carbon Footprint**: Increased adoption of efficient solar panels accelerates the transition from fossil fuels.
      - **Job Creation**: The solar industry is creating millions of jobs in manufacturing, installation, and research.
      - **Energy Access**: Affordable solar solutions are bringing electricity to remote and underserved regions.

      The future of solar technology is bright, with innovations like perovskite cells, bifacial panels, transparent solar, and smart systems paving the way for a sustainable energy era. As research progresses and costs continue to decline, solar power is poised to become a cornerstone of global energy production, empowering communities and protecting our planet.
    `,
    relatedPosts: [
      {
        title: "Emerging Solar Panel Technologies",
        slug: "emerging-solar-technologies",
        featuredImage: "https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg",
      },
      {
        title: "Solar Battery Storage Solutions",
        slug: "solar-battery-storage",
        featuredImage: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "Installation Tips for Home Solar Systems",
    excerpt:
      "Learn the key considerations for a successful residential solar installation.",
    date: "2024-04-22",
    category: "Installation Tips",
    slug: "home-solar-installation-tips",
    featuredImage: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    content: `
      Installing a solar system in your home is a significant step toward energy independence and sustainability. However, the process requires careful planning to ensure efficiency, safety, and long-term savings. This article provides essential tips for homeowners embarking on their solar journey, covering site assessment, equipment selection, and professional installation.

      ### Conducting a Thorough Site Assessment
      Before installing solar panels, a comprehensive site assessment is critical to determine your home’s suitability.
      - **Roof Condition**: Ensure your roof is in good condition and can support the weight of solar panels for 25–30 years.
      - **Orientation and Tilt**: South-facing roofs with a 15–40-degree tilt are ideal in the Northern Hemisphere for maximum sunlight exposure.
      - **Shading Analysis**: Identify potential obstructions like trees or buildings that could cast shadows, reducing panel efficiency.

      ### Choosing the Right Equipment
      Selecting high-quality solar equipment tailored to your needs is essential for optimal performance.
      - **Solar Panels**: Choose monocrystalline panels for higher efficiency or polycrystalline for cost savings, depending on your budget.
      - **Inverters**: Decide between string inverters (cost-effective) or microinverters (better for shaded roofs) based on your site conditions.
      - **Mounting Systems**: Ensure mounts are durable and compatible with your roof type (e.g., asphalt, metal, or tile).

      ### Working with Certified Professionals
      Hiring experienced solar installers ensures a safe and compliant installation.
      - **Certifications**: Look for installers certified by organizations like NABCEP (North American Board of Certified Energy Practitioners).
      - **Permits and Regulations**: Professionals can navigate local building codes, permits, and utility interconnection agreements.
      - **Warranties**: Verify that panels and inverters come with strong warranties (typically 25 years for panels, 10–12 years for inverters).

      ### Understanding Costs and Incentives
      Solar installations involve upfront costs, but incentives can significantly reduce expenses.
      - **Federal Tax Credits**: In the U.S., the Investment Tax Credit (ITC) offers a 30% deduction on installation costs (as of 2025).
      - **State and Local Rebates**: Research rebates or low-interest loans available in your area.
      - **Net Metering**: Check if your utility offers net metering to credit excess energy produced by your system.

      ### Planning for Maintenance
      Solar systems are low-maintenance but require periodic care to maintain efficiency.
      - **Cleaning**: Rinse panels annually to remove dust or debris, especially in dry or dusty regions.
      - **Monitoring**: Use monitoring software to track energy production and detect performance issues.
      - **Inspections**: Schedule professional inspections every 5–10 years to check wiring and mounts.

      ### Benefits of Home Solar Systems
      Investing in solar offers both financial and environmental rewards.
      - **Energy Savings**: Reduce or eliminate electricity bills, with potential savings of thousands over the system’s lifetime.
      - **Increased Property Value**: Homes with solar systems often sell for a premium.
      - **Environmental Impact**: Lower your carbon footprint by relying on clean, renewable energy.

      By conducting a thorough site assessment, choosing quality equipment, working with professionals, and leveraging incentives, you can ensure a successful solar installation. A well-planned solar system not only saves money but also contributes to a greener future, making it a smart choice for homeowners.
    `,
    relatedPosts: [
      {
        title: "Financing Your Solar Installation",
        slug: "solar-installation-financing",
        featuredImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      },
      {
        title: "Maximizing Energy Savings with Solar",
        slug: "maximizing-energy-savings",
        featuredImage: "https://yoderelectric.com/wp-content/uploads/2024/10/7_Solar_Panel_Installations.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Maximizing Energy Savings with Solar",
    excerpt:
      "Practical strategies to reduce your electricity bills using solar power.",
    date: "2024-03-10",
    category: "Energy Savings",
    slug: "maximizing-energy-savings",
    featuredImage: "https://yoderelectric.com/wp-content/uploads/2024/10/7_Solar_Panel_Installations.jpg",
    content: `
      Solar power is a powerful tool for reducing electricity bills and achieving energy independence. However, maximizing savings requires strategic planning and smart energy habits. This article outlines practical strategies to optimize your solar system’s performance and stretch your energy dollars further.

      ### Understanding Your Energy Needs
      The first step to maximizing savings is understanding your household’s energy consumption.
      - **Energy Audit**: Conduct a home energy audit to identify high-consumption appliances and usage patterns.
      - **Peak Usage Times**: Determine when your household uses the most electricity (e.g., evenings) to align with solar production.
      - **Baseline Usage**: Calculate your average monthly kWh consumption to size your solar system appropriately.

      ### Optimizing Solar System Design
      A well-designed solar system ensures maximum energy production.
      - **System Sizing**: Install a system that covers 80–100% of your annual energy needs to avoid over- or under-sizing.
      - **Panel Placement**: Position panels to capture maximum sunlight, avoiding shaded areas.
      - **High-Efficiency Panels**: Invest in high-efficiency panels to generate more power in limited space.

      ### Leveraging Net Metering
      Net metering allows you to earn credits for excess energy produced by your solar system.
      - **How It Works**: When your panels produce more electricity than you use, the excess is sent to the grid, earning credits.
      - **Maximizing Credits**: Run high-energy appliances (e.g., washing machines) during peak solar production hours to reduce grid reliance.
      - **Utility Policies**: Check your utility’s net metering rules, as some offer 1:1 credit while others have lower rates.

      ### Adopting Energy-Efficient Habits
      Combining solar with energy-efficient practices amplifies savings.
      - **LED Lighting**: Replace incandescent bulbs with LED lights to reduce energy consumption by up to 80%.
      - **Smart Thermostats**: Use programmable thermostats to control heating and cooling, saving 10–15% on HVAC costs.
      - **Appliance Upgrades**: Upgrade to Energy Star-rated appliances for lower energy use.

      ### Adding Battery Storage
      Battery storage systems store excess solar energy for use when panels aren’t producing.
      - **Time-of-Use Savings**: Use stored energy during peak rate hours to avoid high utility charges.
      - **Backup Power**: Batteries provide power during outages, ensuring uninterrupted savings.
      - **Popular Options**: Consider lithium-ion batteries like Tesla Powerwall for reliability and capacity.

      ### Monitoring and Maintenance
      Regular monitoring and maintenance keep your system performing at its best.
      - **Performance Tracking**: Use monitoring apps to track daily energy production and identify dips in performance.
      - **Panel Cleaning**: Clean panels every 6–12 months to remove dirt or debris that reduces efficiency.
      - **Professional Checkups**: Schedule inspections every few years to ensure wiring and inverters are functioning properly.

      ### Financial Benefits
      Maximizing energy savings with solar offers significant financial rewards.
      - **Reduced Bills**: Homeowners can save $1,000–$2,000 annually on electricity, depending on system size and usage.
      - **Return on Investment**: Most solar systems pay for themselves within 7–10 years through savings and incentives.
      - **Long-Term Value**: Solar increases home resale value, with studies showing a 4–6% price premium.

      By understanding your energy needs, optimizing your system, leveraging net metering, adopting efficient habits, adding storage, and maintaining your panels, you can maximize the financial and environmental benefits of solar power. These strategies empower you to take control of your energy costs and contribute to a sustainable future.
    `,
    relatedPosts: [
      {
        title: "Solar Battery Storage Solutions",
        slug: "solar-battery-storage",
        featuredImage: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
      },
      {
        title: "Installation Tips for Home Solar Systems",
        slug: "home-solar-installation-tips",
        featuredImage: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      },
    ],
  },
  {
    id: 4,
    title: "Solar Battery Storage Solutions",
    excerpt:
      "Explore cutting-edge battery technologies for solar energy storage.",
    date: "2024-02-05",
    category: "Solar Tech",
    slug: "solar-battery-storage",
    featuredImage: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
    content: `
      Solar battery storage systems are transforming the way we use solar energy, enabling homeowners and businesses to store excess power for later use. These systems enhance energy independence, provide backup power, and maximize savings. This article explores the latest battery technologies, their benefits, and considerations for choosing the right solution.

      ### Why Battery Storage Matters
      Solar panels generate electricity during the day, but energy demand often peaks in the evening. Batteries bridge this gap by storing surplus energy.
      - **Energy Independence**: Reduce reliance on the grid by using stored solar power.
      - **Backup Power**: Maintain electricity during outages, critical for homes and businesses.
      - **Cost Savings**: Use stored energy during high-rate periods to lower utility bills.

      ### Lithium-Ion Batteries: The Industry Standard
      Lithium-ion batteries dominate the solar storage market due to their efficiency and reliability.
      - **High Efficiency**: Offer 90–95% round-trip efficiency, minimizing energy loss.
      - **Long Lifespan**: Typically last 10–15 years or 5,000–10,000 cycles.
      - **Popular Models**: Tesla Powerwall, LG Chem RESU, and Enphase IQ Battery are leading options.

      ### Flow Batteries: A Promising Alternative
      Flow batteries use liquid electrolytes to store energy, offering unique advantages.
      - **Scalability**: Easily scaled by increasing electrolyte volume, ideal for large installations.
      - **Longevity**: Can last 20–25 years with minimal degradation.
      - **Challenges**: Lower energy density and higher upfront costs limit residential use.

      ### Solid-State Batteries: The Next Frontier
      Solid-state batteries are an emerging technology with potential to revolutionize solar storage.
      - **Safety**: Use solid electrolytes, reducing fire risks compared to lithium-ion.
      - **Higher Density**: Offer greater energy storage in a smaller footprint.
      - **Development Stage**: Still in research, with commercial availability expected by 2030.

      ### Choosing the Right Battery
      Selecting a battery depends on your energy needs, budget, and goals.
      - **Capacity**: Choose a battery with enough kWh to cover your nightly or backup needs (e.g., 10–14 kWh for a typical home).
      - **Depth of Discharge (DoD)**: Opt for batteries with high DoD (80–100%) to maximize usable capacity.
      - **Warranty**: Look for warranties covering 10+ years or a minimum number of cycles.

      ### Integration with Solar Systems
      Batteries must be compatible with your solar setup for optimal performance.
      - **Hybrid Inverters**: Use inverters that support both solar and battery storage for seamless integration.
      - **Smart Management**: Employ energy management systems to prioritize solar, battery, or grid use based on cost and demand.
      - **Scalability**: Choose systems that allow additional batteries to be added as needs grow.

      ### Financial and Environmental Benefits
      Solar batteries offer compelling economic and ecological advantages.
      - **Savings**: Save hundreds annually by avoiding peak utility rates or grid dependence.
      - **Incentives**: Some regions offer tax credits or rebates for battery installations.
      - **Sustainability**: Reduce reliance on fossil fuel-based grid power, lowering your carbon footprint.

      Solar battery storage solutions, from lithium-ion to emerging solid-state technologies, are key to unlocking the full potential of solar energy. By choosing the right battery and integrating it effectively, you can achieve greater energy independence, resilience, and savings while contributing to a cleaner planet.
    `,
    relatedPosts: [
      {
        title: "The Future of Solar Technology",
        slug: "future-of-solar-technology",
        featuredImage: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
      },
      {
        title: "Maximizing Energy Savings with Solar",
        slug: "maximizing-energy-savings",
        featuredImage: "https://yoderelectric.com/wp-content/uploads/2024/10/7_Solar_Panel_Installations.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Community Solar Projects",
    excerpt: "How local communities are transforming energy production.",
    date: "2024-01-15",
    category: "Energy Savings",
    slug: "community-solar-projects",
    featuredImage: "https://images.pexels.com/photos/433309/pexels-photo-433309.jpeg",
    content: `
      Community solar projects are democratizing access to solar energy, allowing individuals and businesses to benefit from solar power without installing panels on their properties. These shared solar installations are transforming energy production by making clean energy accessible, affordable, and equitable. This article explores how community solar works, its benefits, and its impact on local communities.

      ### What Are Community Solar Projects?
      Community solar involves a large, centrally located solar array that generates electricity for multiple subscribers.
      - **Shared Infrastructure**: A single solar farm serves dozens or hundreds of participants, reducing individual costs.
      - **Subscription Model**: Participants subscribe to a portion of the array’s output, receiving credits on their utility bills.
      - **Accessibility**: Ideal for renters, apartment dwellers, or homeowners with unsuitable roofs.

      ### Benefits for Subscribers
      Community solar offers financial and environmental advantages for participants.
      - **Cost Savings**: Subscribers typically save 5–20% on electricity bills, depending on the project.
      - **No Upfront Costs**: Unlike home solar, community solar requires no installation or maintenance expenses.
      - **Environmental Impact**: Each subscriber contributes to reducing greenhouse gas emissions.

      ### Benefits for Communities
      Beyond individual savings, community solar fosters local development.
      - **Economic Growth**: Projects create jobs in construction, maintenance, and administration.
      - **Energy Equity**: Low-income households gain access to clean energy, reducing energy cost burdens.
      - **Land Use**: Solar farms can repurpose underutilized land, such as brownfields or vacant lots.

      ### How to Join a Community Solar Project
      Participating in community solar is straightforward but requires research.
      - **Find a Project**: Check with local utilities, solar developers, or state programs for available projects.
      - **Evaluate Terms**: Review subscription costs, contract length, and credit allocation.
      - **Sign Up**: Enroll through the project provider, typically with no credit check or long-term commitment.

      ### Challenges and Solutions
      While community solar is promising, it faces hurdles that developers are addressing.
      - **Land Availability**: Securing large, unshaded sites can be difficult; solutions include partnering with landowners or using public land.
      - **Policy Barriers**: Some states lack supportive policies; advocacy for net metering and incentives is key.
      - **Scalability**: Expanding projects to meet demand requires investment in grid infrastructure.

      ### Success Stories
      Community solar is gaining traction worldwide, with inspiring examples.
      - **United States**: Over 2,000 MW of community solar capacity installed by 2025, serving 40+ states.
      - **Europe**: Countries like Germany and Denmark have robust community solar models, integrating with cooperative energy systems.
      - **Developing Nations**: Projects in India and Africa are bringing electricity to off-grid communities.

      ### Future of Community Solar
      The community solar market is expected to grow significantly, driven by policy support and consumer demand.
      - **Technological Advances**: Improved panel efficiency and battery storage will enhance project viability.
      - **Policy Support**: Expanded tax credits and state mandates will accelerate adoption.
      - **Inclusivity**: Programs targeting underserved communities will ensure equitable access.

      Community solar projects are reshaping energy production by making solar power inclusive and cost-effective. By joining a project, you can save money, support local economies, and contribute to a sustainable future. As these initiatives expand, they hold the potential to power communities worldwide with clean, renewable energy.
    `,
    relatedPosts: [
      {
        title: "Maximizing Energy Savings with Solar",
        slug: "maximizing-energy-savings",
        featuredImage: "https://yoderelectric.com/wp-content/uploads/2024/10/7_Solar_Panel_Installations.jpg",
      },
      {
        title: "The Future of Solar Technology",
        slug: "future-of-solar-technology",
        featuredImage: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
      },
    ],
  },
  {
    id: 6,
    title: "Emerging Solar Panel Technologies",
    excerpt: "Next-generation solar panel innovations changing the industry.",
    date: "2023-12-20",
    category: "Solar Tech",
    slug: "emerging-solar-technologies",
    featuredImage: "https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg",
    content: `
      The solar industry is undergoing a technological renaissance, with emerging innovations poised to enhance efficiency, affordability, and versatility. From advanced materials to novel designs, these next-generation solar panels are redefining what’s possible. This article explores the most promising emerging solar panel technologies and their potential to reshape the energy sector.

      ### Tandem Solar Cells
      Tandem solar cells stack multiple photovoltaic layers to capture a wider range of sunlight.
      - **Higher Efficiency**: Combining silicon with materials like perovskite can achieve efficiencies above 30%.
      - **Applications**: Ideal for space-constrained installations, such as urban rooftops.
      - **Progress**: Tandem cells are transitioning from labs to commercial production, with pilot projects underway.

      ### Organic Photovoltaics (OPVs)
      Organic photovoltaics use carbon-based materials to create flexible, lightweight panels.
      - **Flexibility**: Can be integrated into curved surfaces, fabrics, or portable devices.
      - **Low Cost**: Printable production methods reduce manufacturing expenses.
      - **Limitations**: Lower efficiency (10–12%) and shorter lifespans are being addressed through material improvements.

      ### Quantum Dot Solar Cells
      Quantum dots are nanoscale semiconductors that enhance light absorption.
      - **Tunable Properties**: Adjust dot size to optimize for specific wavelengths, boosting efficiency.
      - **Cost-Effective**: Can be applied as a coating on existing panels, reducing costs.
      - **Research Stage**: Still experimental, with commercial viability expected in 5–10 years.

      ### Solar Skin Technology
      Solar skins allow panels to blend aesthetically with their surroundings.
      - **Customizable Design**: Mimic roof textures or colors, appealing to homeowners concerned about aesthetics.
      - **Efficiency Trade-Off**: Slightly lower efficiency due to design layers, but improving rapidly.
      - **Market Appeal**: Gaining traction in residential and commercial markets.

      ### Concentrated Photovoltaics (CPV)
      Concentrated photovoltaics use lenses to focus sunlight onto small, high-efficiency cells.
      - **High Efficiency**: Achieve efficiencies up to 40% in sunny regions.
      - **Best Use Cases**: Suited for large-scale solar farms in deserts or high-sunlight areas.
      - **Challenges**: High costs and tracking system requirements limit widespread adoption.

      ### Environmental and Economic Impacts
      Emerging solar technologies offer significant benefits beyond technical performance.
      - **Sustainability**: Reduced material use and recyclable designs lower environmental impact.
      - **Affordability**: Lower production costs will make solar more accessible globally.
      - **Innovation Ecosystem**: Drives investment in research, creating jobs and fostering collaboration.

      ### Challenges to Adoption
      While promising, these technologies face hurdles to widespread use.
      - **Scalability**: Moving from lab to mass production requires significant investment.
      - **Durability**: New materials must prove long-term reliability in real-world conditions.
      - **Market Competition**: Established silicon panels dominate, requiring new technologies to compete on cost and performance.

      Emerging solar panel technologies, from tandem cells to quantum dots, are paving the way for a more efficient and versatile solar industry. As these innovations mature, they will make solar power more affordable, aesthetically pleasing, and adaptable, accelerating the global transition to renewable energy.
    `,
    relatedPosts: [
      {
        title: "The Future of Solar Technology",
        slug: "future-of-solar-technology",
        featuredImage: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
      },
      {
        title: "Solar Battery Storage Solutions",
        slug: "solar-battery-storage",
        featuredImage: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
      },
    ],
  },
  {
    id: 7,
    title: "Financing Your Solar Installation",
    excerpt: "Understanding solar financing options and incentives.",
    date: "2023-11-10",
    category: "Installation Tips",
    slug: "solar-installation-financing",
    featuredImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    content: `
      Solar installations are a smart investment, but their upfront costs can be daunting. Fortunately, a variety of financing options and incentives make solar more affordable than ever. This article explores the key ways to finance your solar system, from loans to leases, and highlights incentives that reduce costs.

      ### Solar Loans
      Solar loans allow you to own your system while spreading payments over time.
      - **Types**: Secured (home equity) or unsecured (personal) loans, with terms of 5–20 years.
      - **Benefits**: You own the system, qualify for tax credits, and benefit from energy savings.
      - **Considerations**: Interest rates vary (2–8%), so compare lenders for the best terms.

      ### Solar Leases and Power Purchase Agreements (PPAs)
      Leases and PPAs let you use solar without owning the system.
      - **Leases**: Pay a fixed monthly fee for the system, with maintenance included.
      - **PPAs**: Pay per kWh for the energy produced, often at a lower rate than utility prices.
      - **Pros and Cons**: No upfront costs, but you don’t own the system or qualify for tax credits.

      ### Federal and State Incentives
      Government incentives significantly reduce solar costs.
      - **Federal ITC**: The U.S. Investment Tax Credit offers a 30% deduction on installation costs (as of 2025).
      - **State Rebates**: Many states offer cash rebates, tax credits, or low-interest loans.
      - **Local Programs**: Some municipalities provide additional incentives, such as property tax exemptions.

      ### Net Metering and Feed-In Tariffs
      These programs compensate you for excess energy produced.
      - **Net Metering**: Earn utility bill credits for surplus energy sent to the grid.
      - **Feed-In Tariffs**: Get paid a fixed rate for every kWh your system generates.
      - **Availability**: Check with your utility, as policies vary by region.

      ### Community Solar as a Low-Cost Option
      For those unable to install panels, community solar offers a financing alternative.
      - **Subscription Model**: Pay a monthly fee for a share of a solar farm’s output.
      - **No Installation**: Ideal for renters or homes with unsuitable roofs.
      - **Savings**: Typically 5–15% reduction in electricity bills.

      ### Planning Your Budget
      Effective financial planning ensures solar is a sound investment.
      - **Cost Estimates**: Average residential systems cost $15,000–$25,000 before incentives.
      - **ROI Calculation**: Factor in savings, incentives, and loan interest to estimate payback (typically 7–10 years).
      - **Long-Term Savings**: Systems can save $20,000–$50,000 over 25 years.

      ### Tips for Maximizing Affordability
      - **Shop Around**: Get quotes from multiple installers to compare financing options.
      - **Combine Incentives**: Stack federal, state, and local incentives for maximum savings.
      - **Monitor Policies**: Stay updated on expiring incentives or new programs in your area.

      Financing your solar installation is more accessible than ever, thanks to loans, leases, PPAs, and generous incentives. By choosing the right financing option and leveraging available programs, you can make solar power a reality, saving money and contributing to a sustainable future.
    `,
    relatedPosts: [
      {
        title: "Installation Tips for Home Solar Systems",
        slug: "home-solar-installation-tips",
        featuredImage: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      },
      {
        title: "Community Solar Projects",
        slug: "community-solar-projects",
        featuredImage: "https://images.pexels.com/photos/433309/pexels-photo-433309.jpeg",
      },
    ],
  },
];

const BlogPostPage = () => {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug || '';
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  useEffect(() => {
    const savedComments = localStorage.getItem(`blogComments_${slug}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = scrollTop / (docHeight - windowHeight);
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);  

  useEffect(() => {
    localStorage.setItem(
      `blogComments_${slug}`,
      JSON.stringify(comments)
    );
  }, [comments, slug]);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div
        className={`container mx-auto px-4 py-12 text-center text-gray-700 ${poppins.className}`}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
          404 - Blog Post Not Found
        </h1>
        <p className="text-lg text-gray-600">
          The requested blog post could not be located.{" "}
          <Link
            href="/blogs"
            className="text-green-500 hover:text-green-600 underline"
          >
            Return to Blog
          </Link>
        </p>
      </div>
    );
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() && charCount <= maxChars) {
      const newComment: Comment = {
        id: Date.now(),
        text: comment,
        timestamp: new Date().toLocaleString("en-US", {
          timeZone: "Asia/Karachi",
          hour12: true,
        }),
      };
      setComments((prev) => [newComment, ...prev]);
      setComment("");
      setCharCount(0);
    }
  };

  const handleDeleteComment = (id: number) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    }
  };

  const handleShare = (platform: "twitter" | "facebook") => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
        "_blank"
      );
    } else if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "_blank"
      );
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setComment(text);
    setCharCount(text.length);
  };

  return (
    <div className={`bg-white text-gray-800 min-h-screen ${inter.className}`}>
      {/* <Head>
        <title>{post.title} - Solar Insights Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content={`${post.category}, solar, ${post.title}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}

      <div className="fixed top-0 left-0 w-full z-50">
        <div
          className="h-1 bg-[#019D4D]"
          style={{
            width: `${scrollProgress * 100}%`,
            transition: "width 0.3s ease",
          }}
        ></div>
      </div>

      <div
        className="relative h-[40vh] bg-green-50 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.featuredImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center p-4">
          <div className="animate-slide-in-bottom">
            <img
              src={post.featuredImage}
              alt={`${post.title} banner`}
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full mb-4 shadow-md border-2 border-white"
            />
            <h1
              className={`${poppins.className} text-2xl md:text-4xl font-bold text-white mb-3 drop-shadow-md`}
            >
              {post.title}
            </h1>
            <div className="flex justify-center items-center space-x-3 text-white/90">
              <span className={`${poppins.className} text-sm md:text-base`}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <article
          className={`
          ${inter.className}
          prose prose-sm md:prose-base
          text-gray-700
          mb-12
          bg-white
          p-6 md:p-8
          rounded-lg
          shadow-sm
          transition-all hover:shadow-md
          animate-fade-in
        `}
        >
          {post.content.split("\n").map((paragraph, index) =>
            paragraph.trim().startsWith("###") ? (
              <h3
                key={index}
                className={`
                  ${poppins.className}
                  text-xl md:text-2xl
                  font-bold
                  text-gray-900
                  mt-6 mb-3
                  animate-slide-in-left
                `}
              >
                {paragraph.replace("###", "").trim()}
              </h3>
            ) : paragraph.trim().startsWith("- ") ? (
              <li
                key={index}
                className="mb-2 text-gray-700 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {paragraph.replace("- ", "").trim()}
              </li>
            ) : paragraph.trim() ? (
              <p
                key={index}
                className="mb-4 text-gray-700 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {paragraph.trim()}
              </p>
            ) : null
          )}
          <blockquote
            className={`
            ${poppins.className}
            border-l-4 border-green-500
            pl-4 py-2 my-6
            text-base md:text-lg
            italic text-gray-900
            bg-green-50
            animate-slide-in-right
          `}
          >
            Empowering sustainable energy solutions, one solar panel at a time.
          </blockquote>
        </article>

        <section className="mb-12 animate-slide-in-bottom">
          <h2
            className={`${poppins.className} text-xl md:text-2xl font-bold text-gray-900 mb-4`}
          >
            Share This Post
          </h2>
          <div className="flex space-x-3">
            <button
              onClick={() => handleShare("twitter")}
              className="group relative flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full hover:bg-green-600 hover:shadow-md transition-all duration-300"
              aria-label="Share on Twitter"
            >
              <TwitterIcon />
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Twitter
              </span>
            </button>
            <button
              onClick={() => handleShare("facebook")}
              className="group relative flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full hover:bg-green-600 hover:shadow-md transition-all duration-300"
              aria-label="Share on Facebook"
            >
              <FacebookIcon />
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Facebook
              </span>
            </button>
          </div>
        </section>

        <section className="mb-12">
          <h2
            className={`${poppins.className} text-xl md:text-2xl font-bold text-gray-900 mb-4 animate-slide-in-bottom`}
          >
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {post.relatedPosts.map((relatedPost, index) => (
              <Link
                key={relatedPost.slug}
                href={`/blogs/${relatedPost.slug}`}
                className="block group"
              >
                <div
                  className="bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-slide-in-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className="w-full h-32 bg-cover bg-center rounded-t-lg group-hover:scale-[1.02] transition-transform duration-300"
                    style={{
                      backgroundImage: `url(${
                        relatedPost.featuredImage || "/images/default-blog.jpg"
                      })`,
                    }}
                  ></div>
                  <div className="p-4">
                    <h3
                      className={`${poppins.className} text-base md:text-lg font-bold text-gray-900 mb-1 group-hover:text-green-500 transition-colors`}
                    >
                      {relatedPost.title}
                    </h3>
                    <span
                      className={`${poppins.className} text-sm text-green-500 hover:underline`}
                    >
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2
            className={`${poppins.className} text-xl md:text-2xl font-bold text-gray-900 mb-4 animate-slide-in-bottom`}
          >
            Comments
          </h2>
          <form
            onSubmit={handleCommentSubmit}
            className="mb-6 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
          >
            <div className="relative">
              <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Share your thoughts..."
                className={`
                  w-full p-4 border border-gray-200 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-green-500 
                  focus:border-transparent 
                  text-gray-800 placeholder-gray-400 
                  transition-all duration-300
                  resize-none
                `}
                rows={4}
                maxLength={maxChars}
                required
                aria-label="Comment input"
              />
              <span
                className={`${
                  poppins.className
                } absolute bottom-3 right-3 text-xs text-gray-500 ${
                  charCount > maxChars ? "text-red-500" : ""
                }`}
              >
                {charCount}/{maxChars}
              </span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <button
                type="submit"
                disabled={charCount > maxChars}
                className={`
                  px-5 py-2 bg-green-500 text-white rounded-lg 
                  hover:bg-green-600 hover:shadow-md 
                  transition-all duration-300 
                  ${poppins.className} font-medium text-sm
                  disabled:bg-gray-400 disabled:cursor-not-allowed
                `}
                aria-label="Submit comment"
              >
                Post Comment
              </button>
              <span className={`${poppins.className} text-xs text-gray-500`}>
                Join the conversation
              </span>
            </div>
          </form>
          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div
                  key={comment.id}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3 text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className={`${inter.className} text-gray-700 mb-1`}>
                        {comment.text}
                      </p>
                      <div className="flex justify-between items-center">
                        <span
                          className={`${poppins.className} text-xs text-gray-500`}
                        >
                          {comment.timestamp}
                        </span>
                        <button
                          onClick={() => handleDeleteComment(comment.id)}
                          className={`${poppins.className} text-xs text-red-500 hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 rounded`}
                          aria-label="Delete comment"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center bg-green-50 p-6 rounded-lg animate-fade-in">
              <h3
                className={`${poppins.className} text-base text-gray-900 mb-2`}
              >
                No Comments Yet
              </h3>
              <p className={`${inter.className} text-gray-600 text-sm`}>
                Be the first to share your thoughts!
              </p>
            </div>
          )}
        </section>
      </main>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideInBottom {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideInLeft {
            from { transform: translateX(-20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            from { transform: translateX(20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
          .animate-slide-in-bottom {
            animation: slideInBottom 0.6s ease-out forwards;
          }
          .animate-slide-in-left {
            animation: slideInLeft 0.6s ease-out forwards;
          }
          .animate-slide-in-right {
            animation: slideInRight 0.6s ease-out forwards;
          }
          @media (max-width: 768px) {
            .md\\:text-4xl { font-size: 1.5rem; }
            .md\\:text-2xl { font-size: 1.25rem; }
            .md\\:p-8 { padding: 1.5rem; }
            .md\\:grid-cols-2 { grid-template-columns: 1fr; }
            .md\\:px-6 { padding-left: 1rem; padding-right: 1rem; }
            .md\\:w-24 { width: 5rem; }
            .md\\:h-24 { height: 5rem; }
          }
        `}
      </style>
    </div>
  );
};

export default BlogPostPage;
