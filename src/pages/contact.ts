export function renderContact(): HTMLElement {
  const div = document.createElement('div');
  div.innerHTML = `
    
<section class="lg:flex lg:gap-5 py-10 lg:px-20 md:px-10 px-5 text-blue-950">
        <div class="lg:w-1/2 lg:pb-0 pb-10">
          <h2 class="text-[38px] font-bold mb-5">
            Contact <span class="text-[#0074F2] ">Info</span>
          </h2>
          <p class='pb-5 lg:pr-20'>&quot;
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nostrum, fugiat accusantium reiciendis magnam dolorem
            
            &quot;</p>
          <div class="space-y-4">
          
            <div>
              <h4 class="text-lg font-normal">Corporate Office:</h4>

              <address class="flex items-start gap-1 pt-3">
                <IoLocationOutline className='text-blue-500 text-2xl' />
                : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nostrum, fugiat accusantium reiciendis magnam dolorem
            
            &quot;
              </address>
            </div>
            <div>
              <h4 class="text-lg font-medium">Email</h4>
              <p class="flex items-center gap-2  hover:underline">
                <MdOutlineEmail class='text-blue-500' />: example@gmail.com
              </p>
            </div>
            <div>
              <h4 class="text-lg font-medium ">Contact</h4>
              <p class="flex items-center gap-2"><FaPhoneAlt className='text-blue-500' />: +91 404******</p>
            </div>
          </div>
        </div>
        <div class='lg:w-1/2 flex flex-col text-blue-950 py-6 rounded-xl pt-16 lg:px-10  md:px-16 px-5 bg-slate-50 lg:pt-7'>
            <h2 class="text-xl font-light text-blue-600 mb-6">
                Have Questions? Contact Our Highway Consultancy Team
            </h2>
            <form class="space-y-2 w-full" onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="username"
                        class="block text-gray-600 font-semibold mb-1">
                        Name <span class='text-red-500'>*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"       
                        required
                        class="w-full border-gray-300 rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
                    />
                </div>
                <div>
                    <label
                        htmlFor="mobile"
                        class="block text-gray-600 font-semibold mb-1">
                        Mobile Number <span class='text-red-500'>*</span>
                    </label>

                    <input
                        type="tel"
                        id="tel"
                        name="tel"
                        placeholder="phone"
                        required
                        class="w-full border-gray-300 rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-gray-600 font-semibold mb-1">
                        Email ID <span class='text-red-500'>*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        class="w-full border-gray-300 rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
                    />
                </div>
                <div>
                    <label
                        htmlFor="subjects"
                        class="block text-gray-600 font-semibold mb-1">
                        Message
                    </label>
                     <input
                        type="text"
                        id="Message"
                        name="Message"
                        placeholder="Message"       
                        required
                        class="w-full border-gray-300 rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
                    />
                   
                </div>
                <div class='flex justify-center'>
                    <button
                        type="submit"
                        class="py-1 px-5 rounded-xl hover:text-blue-400 hover:border-blue-400 border-2  hover:bg-gray-50 cursor-pointer bg-blue-400 text-gray-50"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
      </section>
<section class="">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
            <p class="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="mt-16 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                        width="100%" height="480" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div>
                    <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div class="px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Our Address</h3>
                            <p class="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                            <p class="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                            <p class="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                            <p class="mt-1 text-gray-600">Sunday: Closed</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                            <p class="mt-1 text-gray-600">Email: info@example.com</p>
                            <p class="mt-1 text-gray-600">Phone: +1 23494 34993</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  `;
  return div;
}
