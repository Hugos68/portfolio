<script lang="ts">
    const roles: string[] = [
        "Frontend Developer",
        "Backend Developer",
        "Tech Enthusiast"
    ]
   
    let currentRoleIndex: number = 0;
    setInterval(() => {
        if (currentRoleIndex === roles.length) currentRoleIndex--;
    }, 3000);
</script>


<p class="mt-[15vh] text-center">Hi my name is</p>
<h1 class="text-center text-[5rem] leading-snug">Hugo Korte</h1>
<p class="text-center">I am a</p>
<h1 class="text-center text-[5rem] leading-snug">{roles.at(currentRoleIndex)}.</h1>

