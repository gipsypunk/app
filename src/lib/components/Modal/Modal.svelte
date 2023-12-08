<dialog id="my_modal_3" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div class="flex flex-col items-center">
      <h1 class="pt-2 text-xl text-blue-b font-semibold">Want to install a water filter?</h1>
      <h3 class="pt-2 text-base text-blue-d text-center">Just fill out the form and we'll get in touch <br> to you as soon as possible.</h3>
    </div>
    <form action="send.php" class="flex flex-col">
      <input type="text" name="name" placeholder="Your name" class="mt-4 p-2 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-b" required>
      <input type="text" name="email" placeholder="Your email" class="mt-4 p-2 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-b" required>
      <input type="tel" name="phone" placeholder="Your phone number" class="mt-4 p-2 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-b" required>
      <div class="p-8 flex flex-row justify-between">
          <input type="submit" value="Send" class="btn  m-2 bg-blue-b text-base border-0 text-white hover:bg-white hover:text-blue-b hover:border hover:border-blue-b w-36 rounded-[50px] shadow-3xl">
          <div class="flex flex-col items-center">
             <a href="tel:+14244386801" class="text-blue-b">424.438.6801</a>
             <a href="mailto:info@yeswater.la" class="text-blue-b">info@yeswater.la</a>

          </div>
      </div>
    </form>
    

    
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
</dialog>
