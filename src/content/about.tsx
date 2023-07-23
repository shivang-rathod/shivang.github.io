import { ComponentProps } from 'react'
import { Friend, SocialProfile } from 'src/components'
import {
  bryanLiu,
  dwayneJohnson,
  github,
  instagram,
  jeffZhao,
  jodiJang,
  linkedin,
  youtube,
} from './b64'

type Profile = ComponentProps<typeof SocialProfile>

export const profiles: Profile[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/shivang-rathod',
    src: github,
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@shivang_rathod',
    src: youtube,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shivang-rathod/',
    src: linkedin,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/shivang_rathod/',
    src: instagram,
  },
]

type Friends = ComponentProps<typeof Friend>[]

export const friends: Friends = [
  {
    src: dwayneJohnson,
    name: 'Dwayne Johnson',
    label: 'Twin Brother',
    url: 'https://www.google.com/search?q=Dwayne%20Johnson',
  },
  {
    src: jodiJang,
    name: 'Jodi Jang',
    label: 'Favorite Husband',
    url: 'https://jodijang.github.io/',
  },
  {
    src: bryanLiu,
    name: 'Bryan Liu',
    label: 'Former Daughter',
    url: 'https://www.liubryan.com/',
  },
  {
    src: jeffZhao,
    name: 'Jeff Zhao',
    label: 'Eldest Disciple',
    url: 'https://kamiyaa.github.io/',
  },
]
