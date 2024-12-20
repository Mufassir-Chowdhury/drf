<!-- src/routes/+page.svelte -->
<script>
    import ProgramCard from "$lib/components/ProgramCard.svelte";
    import DonationCard from "$lib/components/DonationCard.svelte";

    export let data;
  </script>
  
  <div class="container mx-auto px-4">
    <!-- Programs Section -->
    <section class="mb-12">
      <h2 class="text-3xl font-bold text-blue-900 mb-8">Our Ongoing Programs</h2>
      <div class="space-y-8">
        {#each data.programs as program}
          <ProgramCard title={program.title} isMain={true}>
            <div>
                {#each program.details as description}
                    <p class="text-gray-600 mb-4">{description}</p>            
                {/each}
            </div>
          </ProgramCard>
        {/each}
  
    </section>
  
    <!-- Donation Section -->
    <section class="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 mb-12">
      <h2 class="text-3xl font-bold text-blue-900 mb-8">Support Our Cause</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <DonationCard title="Bank Transfer">
          <p class="text-gray-600">Bank: Islami Bank Bangladesh Limited</p>
          <p class="font-mono text-gray-600">IBBL: 20501120207347215</p>
          <p class="font-mono text-gray-600">IBBL: 20501120207561011</p>
        </DonationCard>
        <DonationCard title="Mobile Banking">
          <p class="font-mono text-gray-600">bKash: 01725342536</p>
          <p class="font-mono text-gray-600">Nagad: 01725342536</p>
        </DonationCard>
      </div>
    </section>
    <p class="mb-4">
        To achieve this, we invite you to join hands with us by contributing to our fund. Every donation, 
        big or small, will directly support the reclamation of lives and the restoration of dignity for all.
      </p>
      <blockquote class="border-l-4 border-blue-600 pl-4 my-6 font-serif text-2xl text-blue-900">
        ❝Empowering Sylhet's Vulnerable: A Community Approach❞
      </blockquote>
      <p class="font-semibold text-center text-blue-900 mb-10">
        Let's create a Sylhet we can all be proud of!
      </p>
    <!-- Legislative Body Section -->
    <section class="mb-12">
        <h2 class="text-3xl font-bold text-blue-900 mb-8">Our Founding Members</h2>
        <div class="grid grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 text-center">
            <img 
              src="/Adnan.png" 
              alt="Adnan Mahmud Tamim" 
              class="w-64 h-64 object-cover rounded-2xl shadow-md mx-auto mb-4"
            />
            <h3 class="text-xl font-bold text-blue-900 mb-2">Adnan Mahmud Tamim</h3>
            <p class="text-blue-600 font-medium">SOMCH</p>
          </div>
    
          <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 text-center">
            <img 
              src="/Hifjur.png" 
              alt="Hifjur Rahman" 
              class="w-64 h-64 object-cover rounded-2xl shadow-md mx-auto mb-4"
            />
            <h3 class="text-xl font-bold text-blue-900 mb-2">Hifjur Rahman</h3>
            <p class="text-blue-600 font-medium">SZMCH</p>
          </div>
    
          <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 text-center">
            <img 
              src="/Shahriar.png" 
              alt="Shahriar Rahman Opi" 
              class="w-64 h-64 object-cover rounded-2xl shadow-md mx-auto mb-4"
            />
            <h3 class="text-xl font-bold text-blue-900 mb-2">Shahriar Rahman Opi</h3>
            <p class="text-blue-600 font-medium">DU</p>
          </div>
    
          <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 text-center">
            <img 
              src="/Younus.png" 
              alt="Younus Bin Hosaain Khan" 
              class="w-64 h-64 object-cover rounded-2xl shadow-md mx-auto mb-4"
            />
            <h3 class="text-xl font-bold text-blue-900 mb-2">Younus Bin Hosaain Khan</h3>
            <p class="text-blue-600 font-medium">BAU</p>
          </div>
    
          <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 text-center">
            <img 
              src="/Nahyan.png" 
              alt="H U Nahyan" 
              class="w-64 h-64 object-cover rounded-2xl shadow-md mx-auto mb-4"
            />
            <h3 class="text-xl font-bold text-blue-900 mb-2">H U Nahyan</h3>
            <p class="text-blue-600 font-medium">Theatre Activist</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 text-center">
            <img 
              src="/Zarir.png" 
              alt="Ahmed Zarir" 
              class="w-64 h-64 object-cover rounded-2xl shadow-md mx-auto mb-4"
            />
            <h3 class="text-xl font-bold text-blue-900 mb-2">Ahmed Zarir</h3>
            <p class="text-blue-600 font-medium">New York</p>
          </div>
        </div>
      </section>
  </div>