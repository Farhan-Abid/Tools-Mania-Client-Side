import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9vbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">The go to platform to aquire your required TOOLS!</h1>
      <p className='py-6'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;