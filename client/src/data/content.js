// Single source of truth: edit text, links and images here.
export const IMG={
 "psxDash": "/images/psx-dashboard.webp",
 "psxScreener": "/images/psx-screener.webp",
 "psxIndices": "/images/psx-indices.webp",
 "hisaab1": "/images/hisaab-overview.webp",
 "hisaab2": "/images/hisaab-transactions.webp",
 "h1": "/images/hackathon-1.webp",
 "h2": "/images/hackathon-2.webp",
 "h3": "/images/hackathon-3.webp",
 "ts1": "/images/notes-typescript.webp",
 "n1": "/images/notes-event-loop.webp",
 "n2": "/images/notes-dom-render.webp",
 "n3": "/images/notes-redux.webp",
 "me": "/images/me.webp"
};
export const hero={headline:"Computer Science student building modern web apps",text:"I craft clean, responsive interfaces with JavaScript and React, and I'm growing into full-stack development.",status:"Open to learning, collaboration and opportunities"};
export const about={statement:"I learn by building, and I ship what I build.",text:"I'm a BS Computer Science student at Virtual University of Pakistan, now in my 4th semester, based in Punjab. I began with web development in 2023, and today I build responsive interfaces with HTML, CSS, JavaScript, TypeScript, and React. I enjoy turning ideas into practical products, from an expense tracker to a stock-research platform for the Pakistan Stock Exchange. I've also served as the backend developer in a hackathon team building an AI doctor assistant, and I'm now starting focused backend study with Node.js and Express. My goal is to become a dependable software engineer at a leading Pakistani tech company, then pursue an MS. I'm also making my first open-source contributions and sharing my progress through #100DaysOfCode.",facts:["BS Computer Science, Virtual University of Pakistan (4th semester)", "Backend developer, Alkhidmat Foundation hackathon", "Open-source contributor to frappe/gantt", "Google Generative AI skill badge"]};
export const C={
skills:[
{t:'Frontend',g:[['Confident','HTML5, CSS3, Tailwind CSS, responsive design'],['Working','JavaScript (ES6+), React with Hooks, Context API and React Router, Vite'],['Learning','TypeScript, Redux Toolkit']],u:[['p-psx','PSX Insight'],['p-hisaab','Hisaab'],['p-pass','Password Generator']]},
{t:'Programming foundations',g:[['Foundations','C++ (Cisco C++ Essentials), basic Python, daily problem-solving practice'],['Academic coursework','Calculus, Discrete Mathematics, OOP in C++, Data Structures and Algorithms']],u:[['p-jazz','JazzCash Wallet Simulator']]},
{t:'Backend, early stage',g:[['Project exposure','Node.js, Express, Prisma, PostgreSQL, JWT'],['Learning next','Node.js and Express fundamentals, databases']],u:[['p-psx','PSX Insight'],['p-hack','Hackathon']]},
{t:'Automation',g:[['Working','n8n, WhatsApp Cloud API, Google Sheets, self-hosting on Oracle Cloud']],u:[['p-wa','WhatsApp AI Agent'],['p-inv','Inventory System']]},
{t:'Tools',g:[['Daily','Git, GitHub, VS Code, Postman, Figma, Vercel']],u:[]}],
feat:[
{id:'p-psx',t:'PSX Insight',r:'Flagship project, full-stack',d:'A full-stack Pakistan Stock Exchange research and portfolio platform with stock screening, market indices, portfolio and dividend tracking, JWT authentication, and AI-powered stock summaries.',s:['React','Vite','React Router','Recharts','Lightweight Charts','Node.js','Express','Prisma','PostgreSQL','JWT'],l:[['View on GitHub','https://github.com/zubairdev01/PSX-Insights']],i:[['psxDash','Dashboard: portfolio value, day change and sector allocation (light theme)'],['psxScreener','Screener: filter PSX companies by sector, P/E and price (dark theme)'],['psxIndices','Indices: KSE-100 and KSE-30 charts (dark theme)']]},
{id:'p-hisaab',t:'Hisaab: Smart Expense Tracker',r:'Personal project',d:'A personal finance dashboard with income and expense tracking, category budgets, search and filters, and live currency conversion.',s:['JavaScript','HTML','CSS','Fetch API','localStorage'],l:[['View on GitHub','https://github.com/zubairdev01/javascript_projects/tree/main/Smart%20Expense%20Tracker']],i:[['hisaab1','Hisaab overview: balance, savings rate and budget alert'],['hisaab2','Hisaab transactions: add form, history and category breakdown']]},
{id:'p-hack',t:'AI Doctor Assistant',r:'Alkhidmat Foundation hackathon, team project, backend developer',d:'A team project built at the Alkhidmat Foundation hackathon: an AI doctor assistant. I was the backend developer on the team.',s:[],l:[],i:[['h1','The Alkhidmat Rocket stage at the event'],['h2','The PS5 games zone at the Alkhidmat Youth Summit'],['h3','The gaming zone crowded with visitors at the summit']],tri:1}],
auto:[
{id:'p-wa',t:'WhatsApp AI Agent',d:'An AI-powered WhatsApp assistant that handles customer messages automatically, running on a self-hosted n8n instance on Oracle Cloud.',s:['n8n','WhatsApp Cloud API','Google Sheets','Oracle Cloud']},
{id:'p-inv',t:'Inventory Management System',d:'A workflow-based inventory management system built with n8n and Google Sheets.',s:['n8n','Google Sheets']}],
more:[
{id:'p-pass',t:'Password Generator',d:'Configurable password generator with one-click copy. React, Vite, Tailwind CSS, Hooks.'},
{id:'p-jazz',t:'JazzCash Wallet Simulator',d:'Object-oriented wallet with deposit, withdraw and balance features. JavaScript OOP.'},
{id:'p-gantt',t:'Open-source contribution: frappe/gantt',d:'Opened PR #622 adding a unit test for get_days_in_month. A contribution to an existing project.',l:'https://github.com/frappe/gantt/pull/622'}]};
C.notes=[['ts1','TypeScript behind the scenes: code passes through the lexer, parser, binder and checker, then the emitter outputs JavaScript'],['n1','The JavaScript engine, Web APIs and the event loop, plus how Node.js handles requests'],['n2','How the browser turns HTML and CSS into the DOM, CSSOM and render tree'],['n3','Redux: the store, reducers, useSelector and useDispatch']];
