import type { Chapter } from '@/types/chapter'
import child from '@/images/child.jpg'
import diferencas from '@/images/diferencas.webp'
import logo_mackenzie from '@/images/logo_mackenzie.png'
import logo_mackleaps from '@/images/logo_mackleaps.png'
import interpret from '@/images/interpret.png'
import workshop from '@/images/workshop.jpg'
import finish from '@/images/finish.png'

export const chapters: Chapter[] = [{
        id:'kid',
        opening_text: 'Livia’s fascination with technology started early. Her father and brother-in-law worked in IoT, so she grew up surrounded by people who built things. When she decided to become a Computer Engineer, they were the first to back her.',
        image: child,
        alt: 'Livia aos 11 anos',
        caption: 'Livia at 11 years old, unaware of how exciting life would become',
        imageWidth: '20rem',
    },
    {
        id: 'changes',
        opening_text: 'Then came the plot twist: Engineering wasn’t for her. Changing course was uncomfortable, but it was the first big decision she made entirely on her own.',
        image: diferencas,
        alt: 'Diferenças entre CS e ECS',
        caption: 'The difference she would later understand in practice',
        imageWidth: '30rem',
    },
    {
        id: 'UPM',
        opening_text: 'In 2025, Livia enrolled in Computer Science at Universidade Presbiteriana Mackenzie (UPM). There, she found what she had been looking for all along: technology, the way she wanted to do it.',
        image: logo_mackenzie,
        alt: 'Logo UPM',
        caption: 'The university that would change it all...',
    },
    {
        id: 'MackLEAPS',
        opening_text: 'From day one, she said yes to everything. In her first year, she joined the Residency Program at MackLEAPS, a lab at UPM. That residency grew into a scholarship, which is now her job.',
        image: logo_mackleaps,
        alt: 'Logo MackLEAPS',
        caption: 'The logo of the lab she currently works',
        imageWidth: '30rem',
    },
    {
        id: 'Interpret',
        opening_text: 'At MackLEAPS, Livia got her hands on a real problem: in Brazil’s courts, finding a qualified legal translator can be slow and informal. The idea behind Interpret was simple: a platform where legal translators and judges can find each other. The pilot starts with TRF3, one of Brazil’s federal regional courts. Livia took on the front end, building the interface in Vue.js, the part of the product that judges and translators would actually see and use.',
        image: interpret,
        alt: 'Interpret homepage',
        caption: 'The site that made Livia confirm that she loves what she does',
    },
    {
        id: 'Workshop',
        opening_text: 'Livia didn’t stop at building. At the Semana de Tecnologia e Informação (STI) at Mackenzie, she led a workshop: Introduction to SPAs with Vue.js. The same framework she used to build Interpret became the starting point for other students taking their first steps in modern front-end development.',
        image: workshop,
        alt: 'Workshop STI',
        caption: 'Photo of Livia presenting SPA to students',
        imageWidth: '20rem',
    },
    {
        id: 'Finish',
        opening_text: 'Along the way, she learned that the best way to understand something is to build it, and the best way to master it is to explain it to someone else. Now, she wants to bring that mindset to companies. This is where I’d like to write the next chapter. Let’s talk.',
        image: finish,
        alt: 'Finish photo',
        caption: 'Text me at (11) 98515-7285',
        imageWidth: '26rem',
    },
]