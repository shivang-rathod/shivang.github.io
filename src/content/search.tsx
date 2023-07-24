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
	extras: (
      <><b>Industry:</b> Edtech<br/>
      <b>Business Model:</b> D2C<br/>
      <b>Business Type:</b> Growth, Marketing, Automations<br/>
      <b>Serves to:</b> SMBs & Enterprise Solutions<br/>
      <b>CMS/Framework :</b> Webflow, Next JS</>
    ),
    link: '#',
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
	extras: (
      <><b>Industry:</b> Edtech<br/>
      <b>Business Model:</b> B2C<br/>
      <b>Business Type:</b> Edtch<br/>
      <b>Serves to:</b> SMBs & Enterprise Solutions<br/>
      <b>CMS/Framework :</b> Custom Platform build on Laravel</>
    ),
    link: '#',
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
    title: 'Mconnect Solutions - IT Outsourcing - Web & Mobile Development Company',
    description: (
      <>MCS Ventures is a one-stop solution you need to develop custom web &amp; mobile apps. They craft visually stunning websites, apps, B2B/B2C portals, Ecommerce, social networks, Ecommerce, and others that amplify your business’ growth.</>
    ),
    extras: (
	  <><b>Industry:</b> eCommerce - Magento, WooCommerce, Shopify, WordPress<br/>
      <b>Business Model:</b> B2B, B2C<br/>
      <b>Business Type:</b> Agency<br/>
      <b>Serves to:</b> SMBs & Enterprise Solutions<br/>
      <b>CMS/Framework :</b> Magento 2</>
    ),
    link: '#',
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
    title: 'MageComp - Magento Development Company',
    description: (
      <>Magecomp is a leading provider of Magento extensions, services, customization and anything you can think about Magento needs.</>
    ),
    extras: (
	  <><b>Industry:</b> eCommerce - Magento, WordPress<br/>
      <b>Business Model:</b> SAAS, Agency, B2B, B2C<br/>
      <b>Business Type:</b> Agency<br/>
      <b>Serves to:</b> SMBs & Enterprise Solutions<br/>
      <b>CMS/Framework :</b> Magento 2</>
    ),
    link: '#',
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
]
