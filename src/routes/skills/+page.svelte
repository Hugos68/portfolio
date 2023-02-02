<script lang="ts">
	import { tooltip } from "@skeletonlabs/skeleton";
</script>

<h1>Skills</h1>
<hr class="my-[2.5vh]">

<div class="flex flex-col gap-[33vh] my-[20vh]">
    <section class="flex justify-around flex-row-reverse items-start flex-wrap gap-12 transition-none card p-8">
        <div>
            <h2 class="unstyled text-[clamp(3rem,15vw,6rem)]">Frontend</h2>
            <p class="max-w-[50ch]">
                Building frontend applications is where my digital heart lies when it comes to my preference, creating an <strong>elegant</strong> and <strong>accessible</strong> UI is something I strive for during every single one of my projects.
            </p>
        </div>
        <div class="grid grid-cols-3 gap-[5vw]">
            <i class="devicon-html5-plain colored skills-devicon" use:tooltip={{content: "HTML"}}></i>
            <i class="devicon-css3-plain colored skills-devicon" use:tooltip={{content: "CSS"}}></i>
            <i class="devicon-javascript-plain colored skills-devicon" use:tooltip={{content: "JavaScript"}}></i>
            <i class="devicon-typescript-plain colored skills-devicon" use:tooltip={{content: "TypeScript"}}></i>
            <i class="devicon-tailwindcss-plain colored skills-devicon" use:tooltip={{content: "Tailwind"}}></i>
            <i class="devicon-svelte-plain colored skills-devicon" use:tooltip={{content: "Svelte"}}></i>    
        </div>
  
    </section>

    <section class="flex justify-around items-start flex-wrap gap-12 transition-none card p-8">
        <div>
            <h2 class="unstyled text-[clamp(3rem,15vw,6rem)]">Backend</h2>
            <p class="max-w-[50ch]">
                Building backends is one of the most important aspects to any application. When I am building backend applications I ensure proper <strong>security</strong> along with <strong>fast</strong> and <strong>efficient</strong> solutions to logical problems.
            </p>
        </div>
        <div class="grid grid-cols-3 gap-[5vw]">
            <i class="devicon-nodejs-plain colored skills-devicon" use:tooltip={{content: "Node"}}></i>
            <i class="devicon-java-plain colored skills-devicon" use:tooltip={{content: "Java"}}></i>
            <i class="devicon-csharp-plain colored skills-devicon" use:tooltip={{content: "C#"}}></i>
            <i class="devicon-postgresql-plain colored skills-devicon" use:tooltip={{content: "PostgreSQL"}}></i>
            <i class="devicon-microsoftsqlserver-plain colored skills-devicon" use:tooltip={{content: "MicrosoftSQL"}}></i>
        </div>
    </section>

    <section class="flex justify-around flex-row-reverse items-start flex-wrap gap-12 transition-none card p-8">
        <div>
            <h2 class="unstyled text-[clamp(3rem,15vw,6rem)]">Tooling</h2>
            <p class="max-w-[50ch]">People often not mention it but using the <strong>right tools</strong> for the right job is very important to create and <strong>efficient</strong> workflow whilst making the developer experience enjoyable. That is why I enjoy <strong>teaching</strong> myself and others how to use certain tools.</p>
        </div>
        <div class="grid grid-cols-3 gap-[5vw]">
            <i class="devicon-git-plain colored skills-devicon" use:tooltip={{content: "Git"}}></i>
            <i class="devicon-docker-plain colored skills-devicon" use:tooltip={{content: "Docker"}}></i>
            <i class="devicon-figma-plain colored skills-devicon" use:tooltip={{content: "Figma"}}></i>
            <i class="devicon-photoshop-plain colored skills-devicon" use:tooltip={{content: "Photoshop"}}></i>
        </div>
    </section>
</div>

