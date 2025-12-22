const c={"README.md":{name:"README.md",type:"file",content:`# Zach Kelling
    
Welcome to my terminal!

## Commands to try:
- ls: list files 
- cat [filename]: view file contents
- cd [dir]: change directory
- mkdir [dir]: create directory
- rm [file]: remove file
- clear: clear the terminal
- help: show available commands

Feel free to explore!`},projects:{name:"projects",type:"directory",children:{"awesome-project.txt":{name:"awesome-project.txt",type:"file",content:"This is one of my awesome projects. Check out more at github.com/zeekay"}}},"contact.txt":{name:"contact.txt",type:"file",content:`Twitter: @zeekay
GitHub: @zeekay
Email: [redacted]`},"bio.txt":{name:"bio.txt",type:"file",content:"Software engineer with a passion for building elegant solutions to complex problems."}};let i=[],s=JSON.parse(JSON.stringify(c));const n=()=>{let e=s;for(const t of i)if(e[t]&&e[t].type==="directory"&&e[t].children)e=e[t].children;else return{};return e},a=()=>"/"+i.join("/"),l=e=>{if(!e[0])return i=[],{output:""};const t=e[0];if(t==="..")return i.length>0?(i.pop(),{output:""}):{output:""};const r=n();return r[t]&&r[t].type==="directory"?(i.push(t),{output:""}):{output:`cd: ${t}: No such directory`,isError:!0}},m=e=>{if(!e[0])return{output:"Usage: mkdir [directory]",isError:!0};const t=e[0],r=n();return r[t]?{output:`mkdir: ${t}: File or directory already exists`,isError:!0}:(r[t]={name:t,type:"directory",children:{}},{output:""})},p=e=>{if(!e[0])return{output:"Usage: touch [filename]",isError:!0};const t=e[0],r=n();return r[t]?{output:""}:(r[t]={name:t,type:"file",content:""},{output:""})},f=e=>{if(!e[0])return{output:"Usage: rm [file]",isError:!0};const t=e[0],r=n();return r[t]?(delete r[t],{output:""}):{output:`rm: ${t}: No such file or directory`,isError:!0}},d=()=>({output:`
Available commands:

ls                 - List files in current directory
cd [directory]     - Change directory
cat [file]         - View file contents
vim [file]         - Open file in vim (read-only mockup)
nano [file]        - Open file in nano (read-only mockup)
mkdir [directory]  - Create a new directory
touch [file]       - Create a new file
rm [file]          - Remove a file
clear              - Clear terminal
pwd                - Print working directory
help               - Show this help message
echo [text]        - Print text
`}),y=()=>{const e=n();if(Object.keys(e).length===0)return{output:"No files found",isError:!0};const t=[],r=[];return Object.values(e).forEach(o=>{o.type==="directory"?t.push(`\x1B[1;34m${o.name}/\x1B[0m`):r.push(o.name)}),{output:[...t,...r].join(`
`)}},h=()=>({output:a()||"/"}),w=e=>{if(!e[0])return{output:"Usage: cat [filename]",isError:!0};const t=e[0],r=n();return r[t]&&r[t].type==="file"?{output:r[t].content||""}:{output:`cat: ${t}: No such file`,isError:!0}},u=(e,t)=>{if(!t[0])return{output:`Usage: ${e} [filename]`,isError:!0};const r=t[0],o=n();return o[r]&&o[r].type==="file"?{output:`Opening ${r} in ${e}...

${o[r].content||""}

[${e} mock - read only mode]`}:e==="vim"||e==="nano"?{output:`New file: "${r}"

[${e} mock - read only mode]`}:{output:`${e}: ${r}: No such file`,isError:!0}},E=e=>({output:e.join(" ")}),g=e=>{if(!e.trim())return{output:""};const[t,...r]=e.trim().split(" ");switch(t.toLowerCase()){case"help":return d();case"ls":return y();case"cd":return l(r);case"pwd":return h();case"cat":return w(r);case"vim":case"vi":return u("vim",r);case"nano":return u("nano",r);case"mkdir":return m(r);case"touch":return p(r);case"rm":return f(r);case"echo":return E(r);default:return{output:`command not found: ${t}`,isError:!0}}};export{g as processCommand};
