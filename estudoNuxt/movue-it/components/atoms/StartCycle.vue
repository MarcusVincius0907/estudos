<template functional>
<!-- usa-se functional quando é um componente simples, que é usado apenas para renderizar alguma coisa. Ajuda na performace -->
<section class="flex flex-col flex-1 justify-center items-center p-10 md:p-16"> 
    <h1 class="font-medium text-center text-2xl">
        Start a new cycle to receive new challenges
    </h1>
    <img src="icons/level-up.svg" alt="Level Up" class="mt-10 md:mt-16" :style="{minHeight: '70px'}">
    <p class="text-center text-md mt-4">
        Increase your level by completing challenges  
    </p>
</section>
    
</template>
