import React from 'react';
import { InputSelect } from '..';

export default {
    title: 'Components/InputSelect',
    component: InputSelect,
    argTypes: {}
}

const Template = (args)=> <InputSelect {...args} />

export const Default = Template.bind({});

const sample_data = [
    {
        "label": "Uruguay",
        "value": "UY",
        "icon": "https://flagcdn.com/w320/uy.png"
    },
    {
        "label": "Paraguay",
        "value": "PY",
        "icon": "https://flagcdn.com/w320/py.png"
    },
    {
        "label": "Gambia",
        "value": "GM",
        "icon": "https://flagcdn.com/w320/gm.png"
    },
    {
        "label": "Djibouti",
        "value": "DJ",
        "icon": "https://flagcdn.com/w320/dj.png"
    },
    {
        "label": "Martinique",
        "value": "MQ",
        "icon": "https://flagcdn.com/w320/mq.png"
    },
    {
        "label": "Guam",
        "value": "GU",
        "icon": "https://flagcdn.com/w320/gu.png"
    },
    {
        "label": "Georgia",
        "value": "GE",
        "icon": "https://flagcdn.com/w320/ge.png"
    },
    {
        "label": "United States",
        "value": "US",
        "icon": "https://flagcdn.com/w320/us.png"
    },
    {
        "label": "Belize",
        "value": "BZ",
        "icon": "https://flagcdn.com/w320/bz.png"
    },
    {
        "label": "Mauritius",
        "value": "MU",
        "icon": "https://flagcdn.com/w320/mu.png"
    },
    {
        "label": "Lebanon",
        "value": "LB",
        "icon": "https://flagcdn.com/w320/lb.png"
    },
    {
        "label": "Saudi Arabia",
        "value": "SA",
        "icon": "https://flagcdn.com/w320/sa.png"
    },
    {
        "label": "Ecuador",
        "value": "EC",
        "icon": "https://flagcdn.com/w320/ec.png"
    },
    {
        "label": "Marshall Islands",
        "value": "MH",
        "icon": "https://flagcdn.com/w320/mh.png"
    },
    {
        "label": "Brazil",
        "value": "BR",
        "icon": "https://flagcdn.com/w320/br.png"
    },
    {
        "label": "Uganda",
        "value": "UG",
        "icon": "https://flagcdn.com/w320/ug.png"
    },
    {
        "label": "Qatar",
        "value": "QA",
        "icon": "https://flagcdn.com/w320/qa.png"
    },
    {
        "label": "Timor-Leste",
        "value": "TL",
        "icon": "https://flagcdn.com/w320/tl.png"
    },
    {
        "label": "Mongolia",
        "value": "MN",
        "icon": "https://flagcdn.com/w320/mn.png"
    },
    {
        "label": "Chile",
        "value": "CL",
        "icon": "https://flagcdn.com/w320/cl.png"
    },
    {
        "label": "Liberia",
        "value": "LR",
        "icon": "https://flagcdn.com/w320/lr.png"
    },
    {
        "label": "Nauru",
        "value": "NR",
        "icon": "https://flagcdn.com/w320/nr.png"
    },
    {
        "label": "Réunion",
        "value": "RE",
        "icon": "https://flagcdn.com/w320/re.png"
    },
    {
        "label": "Montserrat",
        "value": "MS",
        "icon": "https://flagcdn.com/w320/ms.png"
    },
    {
        "label": "Taiwan",
        "value": "TW",
        "icon": "https://flagcdn.com/w320/tw.png"
    },
    {
        "label": "Antarctica",
        "value": "AQ",
        "icon": "https://flagcdn.com/w320/aq.png"
    },
    {
        "label": "Saint Pierre and Miquelon",
        "value": "PM",
        "icon": "https://flagcdn.com/w320/pm.png"
    },
    {
        "label": "Argentina",
        "value": "AR",
        "icon": "https://flagcdn.com/w320/ar.png"
    },
    {
        "label": "Togo",
        "value": "TG",
        "icon": "https://flagcdn.com/w320/tg.png"
    },
    {
        "label": "Austria",
        "value": "AT",
        "icon": "https://flagcdn.com/w320/at.png"
    },
    {
        "label": "Grenada",
        "value": "GD",
        "icon": "https://flagcdn.com/w320/gd.png"
    },
    {
        "label": "Faroe Islands",
        "value": "FO",
        "icon": "https://flagcdn.com/w320/fo.png"
    },
    {
        "label": "Morocco",
        "value": "MA",
        "icon": "https://flagcdn.com/w320/ma.png"
    },
    {
        "label": "Anguilla",
        "value": "AI",
        "icon": "https://flagcdn.com/w320/ai.png"
    },
    {
        "label": "Palau",
        "value": "PW",
        "icon": "https://flagcdn.com/w320/pw.png"
    },
    {
        "label": "Northern Mariana Islands",
        "value": "MP",
        "icon": "https://flagcdn.com/w320/mp.png"
    },
    {
        "label": "Mauritania",
        "value": "MR",
        "icon": "https://flagcdn.com/w320/mr.png"
    },
    {
        "label": "Ukraine",
        "value": "UA",
        "icon": "https://flagcdn.com/w320/ua.png"
    },
    {
        "label": "China",
        "value": "CN",
        "icon": "https://flagcdn.com/w320/cn.png"
    },
    {
        "label": "Lesotho",
        "value": "LS",
        "icon": "https://flagcdn.com/w320/ls.png"
    },
    {
        "label": "Cyprus",
        "value": "CY",
        "icon": "https://flagcdn.com/w320/cy.png"
    },
    {
        "label": "DR Congo",
        "value": "CD",
        "icon": "https://flagcdn.com/w320/cd.png"
    },
    {
        "label": "Russia",
        "value": "RU",
        "icon": "https://flagcdn.com/w320/ru.png"
    },
    {
        "label": "Bangladesh",
        "value": "BD",
        "icon": "https://flagcdn.com/w320/bd.png"
    },
    {
        "label": "South Africa",
        "value": "ZA",
        "icon": "https://flagcdn.com/w320/za.png"
    },
    {
        "label": "Curaçao",
        "value": "CW",
        "icon": "https://flagcdn.com/w320/cw.png"
    },
    {
        "label": "Guatemala",
        "value": "GT",
        "icon": "https://flagcdn.com/w320/gt.png"
    },
    {
        "label": "Puerto Rico",
        "value": "PR",
        "icon": "https://flagcdn.com/w320/pr.png"
    },
    {
        "label": "Antigua and Barbuda",
        "value": "AG",
        "icon": "https://flagcdn.com/w320/ag.png"
    },
    {
        "label": "Israel",
        "value": "IL",
        "icon": "https://flagcdn.com/w320/il.png"
    },
    {
        "label": "Guyana",
        "value": "GY",
        "icon": "https://flagcdn.com/w320/gy.png"
    },
    {
        "label": "Cayman Islands",
        "value": "KY",
        "icon": "https://flagcdn.com/w320/ky.png"
    },
    {
        "label": "Croatia",
        "value": "HR",
        "icon": "https://flagcdn.com/w320/hr.png"
    },
    {
        "label": "Iceland",
        "value": "IS",
        "icon": "https://flagcdn.com/w320/is.png"
    },
    {
        "label": "Caribbean Netherlands",
        "value": "BQ",
        "icon": "https://flagcdn.com/w320/bq.png"
    },
    {
        "label": "Sint Maarten",
        "value": "SX",
        "icon": "https://flagcdn.com/w320/sx.png"
    },
    {
        "label": "Namibia",
        "value": "NA",
        "icon": "https://flagcdn.com/w320/na.png"
    },
    {
        "label": "Dominica",
        "value": "DM",
        "icon": "https://flagcdn.com/w320/dm.png"
    },
    {
        "label": "Gibraltar",
        "value": "GI",
        "icon": "https://flagcdn.com/w320/gi.png"
    },
    {
        "label": "Senegal",
        "value": "SN",
        "icon": "https://flagcdn.com/w320/sn.png"
    },
    {
        "label": "Saint Kitts and Nevis",
        "value": "KN",
        "icon": "https://flagcdn.com/w320/kn.png"
    },
    {
        "label": "Oman",
        "value": "OM",
        "icon": "https://flagcdn.com/w320/om.png"
    },
    {
        "label": "Kuwait",
        "value": "KW",
        "icon": "https://flagcdn.com/w320/kw.png"
    },
]

Default.args = {
    options: sample_data,
    defaultOption: {
        label: "Choose Country",
        value: "empty"
    },
    onValue: (event)=>{
        console.log(event)
    },
    hasIcons: true
}