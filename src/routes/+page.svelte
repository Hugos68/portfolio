<script lang="ts">
	import { fly } from "svelte/transition";

    const roles: string[] = [
        "Frontend Developer",
        "Gamer",
        "Backend Developer",
        "Nerd",
        "Tech Enthusiast",
        "IT Student"
    ]
    const randomRole: string = roles[Math.floor(Math.random()*roles.length)];
</script>

<p class="mt-[15vh] text-center" in:fly={{duration: 1000, y: -100}}>Hi my name is</p>
<h1 class="text-center text-[clamp(2.75rem,15vw,10rem)] leading-tight" in:fly={{delay: 500, duration: 1000, x: 100}}>Hugo Korte</h1>
<p class="text-center"  in:fly={{delay: 1000, duration: 1000, y: 100}}>I am a</p>
<h1 class="text-center text-[clamp(2.75rem,10vw,10rem)] leading-tight" in:fly={{delay: 1500, duration: 1000, x: -100}}>{randomRole}.</h1>

