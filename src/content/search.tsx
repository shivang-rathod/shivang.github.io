import Image from 'next/image'
import { ComponentProps } from 'react'
import { SearchResult } from 'src/components'

type Content = ComponentProps<typeof SearchResult>

export const searchResults: Content[] = [
  {
    title: 'Moda - AI Powered eCommerce Growth Platform',
    description: (
      <>Grow omni-channel marketing revenue with Moda. Your all in one, easy-to-use platform for email, SMS, forms & automations.</>
    ),
    link: 'https://www.getmoda.io/',
    image: (
      <Image
        src="https://media.licdn.com/dms/image/C560BAQEIf0FU03HV3w/company-logo_200_200/0/1649664211594?e=1698278400&v=beta&t=qRmsOKhaSv-2inhwPhI-trsu2koXFqTNgsYelDSTR0w"
        alt="moda logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'LearnVern - Free Online Courses & Job Oriented Trainings',
    description: (
      <>Looking for free online courses with certificates for IT training? LearnVern offers web development courses, including PHP, Java, C++, Android, iOS, Testing, Excel &amp; more.</>
    ),
    link: 'https://www.learnvern.com/',
    image: (
      <Image
        src="https://media.licdn.com/dms/image/C4E0BAQGnGu8LuPqxpA/company-logo_200_200/0/1624964126422?e=1698278400&v=beta&t=OB3buokpsr5WOkWuReZD6FDqrZVBYkYd35sLJpDRYBM"
        alt="learnvern logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'Mconnect Solutions - IT Outsourcing - Web &amp; Mobile App Development Company',
    description: (
      <>Need a team to bring your idea to life? No worries. MCS Ventures is a one-stop solution you need to develop custom web &amp; mobile apps. We craft visually stunning websites, apps, B2B/B2C portals, Ecommerce, social networks, Ecommerce, and others that amplify your business’ growth.</>
    ),
    extras: (
      <><b>Industry Type:</b> Agency</>
      <><b>Serves to:</b> SMBs & Enterprise Solutions</>
      <><b>CMS/Franework :</b> Magento</>
    ),
    link: 'https://mconnectsolutions.com/',
    image: (
      <Image
        src="https://media.licdn.com/dms/image/C4E0BAQGmUHwYKdA1dw/company-logo_200_200/0/1631965369022?e=1698278400&v=beta&t=HT7X7c1QsUPbECMow83dTKRyruvK_lYUMGZ2NWejPPg"
        alt="mconnect solutions logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'Shopify | Software Developer Intern',
    description: (
      <>
        Worked with Ruby on Rails, React, TypeScript, MySQL, and GraphQL. Took a
        lot of snacks (n &gt;= 20) from the office once and nobody found out.
      </>
    ),
    extras: (
      <>
        <b>Frontend, Backend</b>
      </>
    ),
    link: 'https://www.shopify.com/plus/solutions/ecommerce-automation/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/8085?s=200&v=4"
        alt="shopify logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'University of Toronto | Teaching Assistant',
    description: (
      <>
        TA&apos;d Computability and Computational Complexity, Discrete Math,
        Linear Algebra II, and Calculus I.
      </>
    ),
    extras: <b>Computer Science, Math</b>,
    link: 'https://web.cs.toronto.edu/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/33668513?s=200&v=4"
        alt="uoft logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'Amazon | Software Development Engineer Intern',
    description: (
      <>
        Worked with AWS CDK, SageMaker, S3, DynamoDB, PrestoDB, Glue, Redshift,
        Athena, Lambda, Express, Lambda, PySpark, React and TypeScript. Built
        scalable data pipelines that ingest terabytes of data daily from the
        Commerce supply chain.
      </>
    ),
    extras: (
      <>
        <b>Data, Infra, DevOps, Frontend, Backend</b>
      </>
    ),
    link: 'https://www.amazon.com/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/8594673?s=200&v=4"
        alt="amazon logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'NorthBoys | Software Engineer',
    description: (
      <>
        Worked with React, TypeScript, and Redux. Built a performant point of
        sale application used by the physical retailers of the business.
      </>
    ),
    extras: (
      <>
        <b>Frontend</b>
      </>
    ),
    link: 'https://northboysusa.com/',
  },
  {
    title: 'IBM | Software Engineer Intern',
    description: (
      <>
        Worked with Elixir, Ruby, Python, Go, JavaScript, Kubernetes, Helm,
        Docker, AWS S3, and GraphQL. Achieved a highscore of 200 million (4th)
        on the Deadpool pinball machine on the second floor, also clapped the
        other interns in pool and ping pong.
      </>
    ),
    extras: (
      <>
        <b>DevOps, Backend, Frontend</b>
      </>
    ),
    link: 'https://skills.network/',
    image: (
      <Image
        src="https://avatars.githubusercontent.com/u/48692442?s=200&v=4"
        alt="ibm logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    ),
  },
  {
    title: 'Google DSC | Project Lead',
    description: (
      <>
        Worked with Flutter, Dart, React, JavaScript, GCP, Go, GraphQL,
        Postgres, Firebase and Kubernetes.
      </>
    ),
    extras: (
      <>
        <b>DevOps, Frontend, Frontend</b>
      </>
    ),
    link: 'https://developers.google.com/community/gdsc',
  },
  {
    title: 'AMACSS | Director of IT',
    description: (
      <>
        Oversaw the Frontend team in development of the organization&apos;s new
        website with Gatsby.
      </>
    ),
    link: 'https://amacss.org/',
  },
  {
    title: 'Network Re-Engineered Inc | Software Engineer',
    description: (
      <>
        Worked with React Native, TypeScript, Streamchat, Chatkit and Firebase.
        Led the development of the messaging and calling feature.
      </>
    ),
    extras: <b>Mobile, Backend</b>,
    link: 'https://www.campusconnect.ca/',
  },
  {
    title: 'Highland Fish and Chips | Fry Cook',
    description: <>Cooked fish, fries, and mushy peas.</>,
    extras: <b>British Food</b>,
    link: 'https://goo.gl/maps/hy1oUTesedd9c61d8/',
  },
  {
    title: 'Via Cibo | Line Cook',
    description: (
      <>
        Cooked pizzas, pastas, salads, paninos, piadinas, risottos, pancakes,
        and more.
      </>
    ),
    extras: <b>Italian Food</b>,
    link: 'https://www.viacibo.com/',
  },
  {
    title: 'Roux | Sous Chef',
    description: (
      <>
        Made croissants, beignets, scones, creme brulee, steaks, fish, shrimp,
        cornbread, fried chicken, ceviche, omelettes, and more.
      </>
    ),
    extras: <b>Creole Food, French Food</b>,
    link: 'https://goo.gl/maps/GYX2fT4o2yf2DkDr8',
  },
]
