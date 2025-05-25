import React from 'react';

const About = () => {
  return (
    <div className='w-full bg-[#091513] pt-[8rem] pb-[4rem]'>
    
      <div className='max-w-6xl mx-auto px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-gray-800 mb-6'>
            About <span className='text-[#C69D5D]'>Wilma</span>
          </h1>
          <p className='text-xl text-white max-w-3xl mx-auto leading-relaxed'>
            Where culinary passion meets digital innovation. Discover, create, and share 
            the recipes that bring families together and make every meal memorable.
          </p>
        </div>

        {/* Story Section */}
        <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
          <div className='space-y-6'>
            <h2 className='text-3xl font-semibold text-white'>Our Story</h2>
            <p className='text-white leading-relaxed'>
              Born from a grandmother's kitchen and nurtured by modern technology, Wilma 
              represents the perfect blend of traditional cooking wisdom and contemporary 
              convenience. We believe that every recipe tells a story, and every meal 
              creates a memory.
            </p>
            <p className='leading-relaxed text-white'>
              Our platform was created to preserve family recipes, discover new flavors, 
              and connect food enthusiasts from around the world. Whether you're a 
              seasoned chef or just starting your culinary journey, Wilma is here to 
              inspire and guide you.
            </p>
          </div>
          <div className='bg-gradient-to-r from-[#C69D5D] to-amber-500 rounded-2xl p-8 text-white shadow-xl'>
            <div className='text-center'>
              <div className='text-6xl mb-4'>👩‍🍳</div>
              <h3 className='text-2xl font-semibold mb-2'>Inspired by Tradition</h3>
              <p className='opacity-90'>
                Every great dish starts with passion and the right recipe. 
                We're here to help you find both.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className='mb-16'>
          <h2 className='text-3xl font-semibold text-white text-center mb-12'>
            What Makes Wilma Special
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-[#C8A05A] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='text-4xl mb-4 text-center'>📚</div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3 text-center'>
                Recipe Collection
              </h3>
              <p className='text-white text-center'>
                Discover thousands of tried-and-tested recipes from cuisines around 
                the world, carefully curated for every skill level.
              </p>
            </div>
            
            <div className='bg-[#C8A05A] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='text-4xl mb-4 text-center'>✨</div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3 text-center'>
                Create & Share
              </h3>
              <p className='text-white text-center'>
                Share your family recipes with the world and create your own 
                digital cookbook that lasts for generations.
              </p>
            </div>
            
            <div className='bg-[#C8A05A] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='text-4xl mb-4 text-center'>🤝</div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3 text-center'>
                Community Driven
              </h3>
              <p className='text-white text-center'>
                Join a vibrant community of food lovers who share tips, 
                variations, and stories behind their favorite dishes.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className='bg-[#C8A05A] rounded-2xl p-8 md:p-12 shadow-xl mb-16'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-semibold text-white mb-4'>Our Mission</h2>
            <p className='text-lg text-white max-w-4xl mx-auto leading-relaxed'>
              To make cooking accessible, enjoyable, and meaningful for everyone. We're 
              building more than just a recipe app – we're creating a space where food 
              brings people together, traditions are preserved, and new culinary 
              adventures begin.
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 gap-8 mt-12'>
            <div className='text-center'>
              <div className='text-5xl mb-4'>🎯</div>
              <h3 className='text-xl font-semibold text-white mb-2'>Our Vision</h3>
              <p className='text-white'>
                To become the world's most trusted platform for recipe sharing and 
                culinary inspiration.
              </p>
            </div>
            <div className='text-center'>
              <div className='text-5xl mb-4'>💝</div>
              <h3 className='text-xl font-semibold text-white mb-2'>Our Values</h3>
              <p className='text-white'>
                Authenticity, community, simplicity, and the belief that great 
                food creates great memories.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center bg-gradient-to-r from-[#C69D5D] to-amber-500 rounded-2xl p-8 text-white'>
          <h2 className='text-3xl font-semibold mb-4'>Ready to Start Cooking?</h2>
          <p className='text-lg mb-6 opacity-90'>
            Join thousands of home cooks who have already discovered their new favorite recipes on Wilma.
          </p>
          <div className='space-x-4'>
            <button className='bg-white text-[#C69D5D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300'>
              Browse Recipes
            </button>
            <button className='border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#C69D5D] transition-colors duration-300'>
              Create Your Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;