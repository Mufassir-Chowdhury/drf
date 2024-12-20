/** @type {import('./$types').PageLoad} */
export async function load() {
    let programs = [
        {
            title: 'Street Beggars Rehabilitation',
            details: [
                "We are thrilled to announce a groundbreaking initiative in Sylhet aimed at rehabilitating the beggary. This is not just about offering temporary aid, Rather it's about restoring the dignity through different levels of intervention as per individual needs.",
                "This is entirely a field-based program, where an enthusiastic team of volunteers will engage with beggars, gather information, categorize them under several parameters, and formulate specific rehabilitation plans for each individual, such as equipping with skills for a good livelihood, employment support, vocational training for young and physically competent individuals.",
                "For those who are elderly, crippled, and mentally distressed, there will be tailored interventions. While the challenge remains that many are intentionally engaged in their job to maximize perceived benefits, we are committed to counseling them using diverse approaches to inspire change."
            ]
        },
        {
            title: 'Widow Welfare',
            details: [
                "Widowhood, though a natural part of life, often comes with immense challenges. Many widowed women face societal stigma, financial insecurity, and emotional isolation. Their resilience and contributions are often overlooked, leaving them marginalized and in need of support to rebuild their lives.",
                "Our charity organization is dedicated to the welfare of widowed women in Sylhet. With compassion and a focus on dignity, we aim to empower these women through matrimony assistance, holistic support, Healthcare assistance, ensuring they regain their rightful place in society."
            ]
        },
        {
            title: 'Tea Worker Rights and Security',
            details: [
                "Nestled in the lush landscapes of Sylhet, the tea gardens stand as a symbol of beauty and tradition. Yet, behind the serene facade lies the untold story of tea workers who toil tirelessly to sustain this iconic industry. Unfortunately, many of these workers face harsh working conditions, limited access to education, healthcare, and basic amenities. Their voices remain unheard, and their struggles often unseen.",
                "Our charity organization is committed to changing this narrative. Rooted in compassion and justice, we aim to raise awareness about the rights of tea workers while directly assisting them through carefully designed rehabilitation programs.",
                "At the Dignity Revival Foundation, we are committed to addressing these challenges. Our mission is twofold, to raise awareness about the rights of tea workers and to provide direct assistance through well-structured rehabilitation programs. We aim to amplify the voices of tea workers, ensuring their struggles are heard and addressed. Through public campaigns, dialogues with stakeholders, and collaborations with policymakers, we work tirelessly to advocate for fair wages, better working conditions, and access to basic rights.",
                "Through your support, we can ensure that the tea workers of Sylhet lead dignified lives. Together, let us create a future where they are not just laborers but respected individuals with rights and opportunities. Join the Dignity Revival Foundation in this journey of empowerment, compassion, and change. Together, we can brew a better tomorrow."
            ]
        },
        {
            title: 'Third Gender Aid',
            details: [
                "At Dignity Revival Foundation, we believe that every individual deserves respect, opportunities, and a life of dignity. Our Third Gender Rehabilitation Project is a heartfelt initiative aimed at empowering the marginalized third-gender community in Sylhet, who have often been exploited by local political malpractice for their unethical gains. This exploitation has not only hindered their growth but also perpetuated cycles of socio-economic deprivation.",
                "Through this project, we envision a future where the third-gender community is integrated into mainstream society as equal citizens. We aim to provide skill-based training, education, and employment opportunities that help them reclaim their self-respect and independence. Our programs will focus on holistic development, including psychological support, legal aid, and access to healthcare.",
                "Additionally, we are committed to raising awareness among the wider population about the challenges faced by this community. By fostering a culture of empathy and understanding, we hope to break down societal prejudices and create an inclusive environment for all.",
                "At Dignity Revival Foundation, we invite you to join us in this transformative journey and be a part of building a more compassionate and inclusive future."
            ]
        }
    ];

    return {
        title: 'Programs',
        programs
    };
}