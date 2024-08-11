function Main(){
    return(<div className="w-full items-center justify-center p-6">
        <h1>Weather App</h1>
        <button>Switch Theme</button>
        <div class="grid h-full w-full grid-cols-2 gap-2 rounded-[12px]">
            <div class="bg-gray-200 rounded-[12px] h-full">
    <form>
        <input class="search-input" type="text" placeholder="Search"/><br/>
        <button>Search</button>
        </form>
        <h1>Weather Forecast</h1>
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EADoQAAICAQIDBQUGBQMFAAAAAAABAgMEBRESITEGQVFhcRMiMkKhI1KBkcHRFENiseGi0vEVJDRTcv/EABoBAQACAwEAAAAAAAAAAAAAAAAEBQECAwb/xAAzEQACAgECBAMHAwQDAQAAAAAAAQIDEQQxBRIhQRNRYSIycYGRsdEUQqEjweHwFVJTM//aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1X3Rp4OL55KP5mkpqOMm0YuWx7T3Nsmp6MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAHJnZKxKvazW8FNKW3cny3+pwvs8KPM9sm9VbsfKtzqi04pp7rbuO+TTr3MgGH0AK72pzP4eWDFdVZ7R+i/5Kbiuo8Lw165+hZcPq8RTfp9ywVyUkpLvW5cLqslc1joezJgAHJl5SrvpojzstfJeEVzbOM7lGyMO7+x0jW3Fy7I6o9DqtjmZMgAAAAAAAAAAAAAAAAAAbgAAAHHqdKyMDIqfLig0R9VX4tM4PujrRPktjL1IXsvqvtYLCyHtYl9m33rw9Ss4VreZKmzft/vmT+Iablfiw2e5Zd0XZVh9ACjdp8hZGqzj8tK4F69X/c8nxWzxdS4+WF/c9Dw+vw6U/Ms/Z7K/itLom370Y8EvVci+4dd42njJ77fQqNZX4d8kSW6JxFNGZkV4tE7rpbQgt2crrY0wdk9kbVwlZJQjuyu6Dk2alrN+XYmlCvaMX8qb/wUvDrZanVSulslhfMtNZCNFCrXmWpF+VIAAAAAAAAAAAAAAAAABhgGl5FcL1VNqMpfAn8xz8SKlyvobKEmm0jcpJ95vk1MrmZB4nHiTXc+Rq1kZwfNpuVGVN1yanXZLZru5nh23Cxtbpv7nq0lKtZ8kXDRNbqzIRqyJKGSu58lLzR6bQ8RjeuWXSX3KLV6KVT5o9YndqmoV4OJOyUlx7e5HxZL1Wpjp63J79jhp6JXTUUfPpSlOc5ze8pNtt954tycm292emSSWETfZfUY4uRLHtfDVbzTb6SLbhWrVU3CXRMr+I6d2RU47otl+TTRS7b7Iwgu9s9FO2FUeaT6FJCEpvliupS9b1eepWcEE448X7qff5s8tr9c9TLEekVseg0ekVKy9yV7Fw+yyrH95R+hYcEXszfqQuKvrFFmj0RfFUN0AarsiuiuVls1GMerZpOcYLMmbRi5PCR6qnxxT2235mYvKyYaw8Gw2MAAAAAAAAAAAAAA4dVwIZ+LKqT4ZdYTXWMu5kbVaeN9fI/l8TtRc6Z8yK9gdoMjCteLqMXNQfC5fMvXxKWjillMnXetvqWd2ghauep4z2LNiZmPl1qePbGafh3epfVXQtjzQeSpsrnW8SRtstjCDm3slzfkbSnFJvPRGi6tJHza+SnkWzjzUpya/M8PNqU5Nd2/uesgsQS9DxyfxbLwZob9ex7UbbWm1ZY9ur5mJTWfal9TTMYHr+Gv/wDVI08WHmY8SHmYePdHrVLb0Mq2D2ZnxI+Z4nJtpSlKW3RSe+x0zzd8/Mykt0Y33799gZLR2Ntiq8qpv3+JS28ti/4JJcs498/2KfisXmMuxZuJJc+SL7bqVJD6pr+Lht11P2133YvkvVlZquJ1U+zHrIm0aGy3q+iI/RoZGsZn8dmveml/ZQXw8X+CJolZrbHddstl2z/gk6pw0sPCr3e77/6y0JMvSpPRkAAAAAAAAAAAAAAw1uYwCq9rtPUZwza4837s/wBGUHGNKl/XXzLfht7f9JlcrssqmrKpyhLrxRezKOEnFqUXh+hbSjGSxJZOi7Us2+r2NuVZKDXNcluSJ6zUWR5ZTbRxhpqoy5lExj4dtvNrhj4srrL4w2N52qJIU4lVXSPE/GRCnqJy7kWVspG/pyXJHHOdzQGMDoOYB5nXCxbTin6m6m47Mym1scV+nRkt6G0/BvkSq9W/3HaN7XRnHCd+JbxVSlTZHvXIn1WuLU631O8owtjytZRsydRzcqPDfk2uP3VLZP126nezVX2dJTZpDT1V9YxRqxaJZF9dFaW85bLl08znVU7JqEd2b2T8OHO+x9Ew8aGJjV0VJKEFt6ntaaY0wUI9jy9ljsm5vudB1NAAAAAAAAAAAGAeFYn05+hhPI23PW/kMgJ7mQcOs1wt07IhNrb2bf5EbVxU6JJ7YZ208nG2LR8+5bpHiux6gkMLC5Ky9c+sYkK/UP3Yka239qO/YhMjmTAAAAAAAABruprvjw2fg+9HSFkoPKMxm4PKIe+mdE+Ga9H4lpXYprKJ0JKayiW7JVQlqblL4o1tr1exc8HjF3uT7IgcSk/Bwu5dE1seoKIcXIxkMOXIyYyIzUnya/AwmnsbYPRkwAAAAAAYa3WzAIzUtKjkb2491mPf9+Etk/Vd5B1OiVi5q3yy9PwSaNS6+klzIruRqWs6bb7LItba6cUU0/RlLbq9bpZcs39ev8lrDT6W9c0EZXanUEtnDFl58Ev9xj/mNUuy+j/I/wCLo83/AB+Dlz9azc+v2drhCt9Y1prf6nC/iGovXLLovT/WdadFTVLmXV+pq0/HVkuOa3jHp5sp9RbyrlR0unjoiU6leRQYAAAAAAAAAAANWRSr63F9Ut0zrVZySybQlyMiabbsS/jqnKFkN+aLmm6UGrIPBMnGNsMSWUSse1OoKOzrx5ebg/3LJcZ1SW0f5/JCfDKH3f8AH4PNvaXUp9JUwX9Ff7tmJ8X1T8vkjZcNoXmSOnYWpajtbqOVdXS/5cXwuX7InafT6vUPmvm1Hy7v6bES+7T0+zVFN+ZYseivHgoVR4Yroi5hXGtcsVhFZKUpPMmbTc1AAAAAAAAAObNw6Myl1XwUov8ANehxuohdDlmjpXbKqXNFlG1XTLdOyeCx71y+Czbr/k8lrNJPTTw+q7M9FptTG+PMt+6OKKcmklvuyG3yrLJGUlknKq1VXGEflRUTlzSbZXyk5PLPZoYAAAAAAAAAAAAABG6pVtKNkVyfusn6SfRxZJol05WcPe1s36eJN74JHbJbNA0ONKjlZkN7XzhW+kF+56Ph3DVWvFsXX7FJrda5vw4Pp9yx8KLorDIAAAAAAAAAAAMMAg+1rq/6Y4z29o5LgW/PcquL8n6fD37E/h3P42Y7FW06HFkp7corc8fqZ4r+JdXPEMEsVZDAAAAAAAAAAAAAAANOXDjxprw5naiXLYjet4mjh0eVa1TGd+3s+Nc349x6DROC1EefbJ31Sk6Zcu59Bjs+aPZb9UeY9D2ZAAAAAAAAAB4ssjXFynJRivmb2RrKSist4MpNvCI3I13T6G1LJjNrur97+xDs4jpobyz8CRDRXz2iRWX2qbTWHQ14Ssf6FddxrtVH5vYnVcM/9H8iv5WVkZdntMm12S7t+70KW2+y6XNY8lnXVCpYgsHVpK3lY/JFdrHhI56h7EgQCMAAAAAAAAAAAAAAAYmt4uPijaPRpjuQD70XSLLsSuna/mYUVCTVtS5JSfT8Sx03E76ekvaXr+SBfoK7Oq6MnMbtNh2pK7jpfi1uvoW1XGNPL3+hX2cNtj7vUlMfPxMnnRk1T8lLn+RPr1NNvuSTIk6bIe8sHUnv0O5yMgAAAGH0AOTK0/Dypb5OLVY/FxW/5ke3TUWdZwTOtd9tfuyaI7I7MYFjfsuOp/0vdfUhWcI08usehKhxG6O/Uiczszl1Jyx5xuX3ejK27g9sesOv3JtfEq2/bWCEtrnTN12VyrlHuktiqlCUHyyWGWMZRksxeTu0p7O1eSIGs2Rw1HYkCCRgAAAAAAAAAAAAAADEnyfobR3RjuQD6sudkWaO3B0nMztpUVNQfzy5L/JL0+iv1HWCx6sjXauqn3n1JzF7Kw2Tyb5t+EOSLangsV/9JN/ArrOKS/YiSp0HTatv+1jNr5rPeJ0OG6WC93Px6kWWt1Ev3YJGqEa1wQioxXRJbImxjGKxFEVtt5ZsNjAAAAAAAAMSMMEB2toqene2lt7WMkovvfkVPF64eBzte0tiw4dZNW8q2Kzps+HIUU9+JP8AE8hqo/0/gXF69nJLehWkQGAAAAAAAAAAAAAADVlTUKJv+k7UxzNG0FmaI/SKa79Rx6737kprdePkX+jhCeojCe2TvqpyhTJx3R9BrjGMVGCSS6JLoeyiklhbHmW22bDYAAAAAAAAAAAPkAasi+qiqVl01GEebbNJ2RrjzSeEbRjKb5Y7lG1vVp6nclFOFEH7i8fNnk9drZamWF7qPQ6PSqhZe7I+E3CcZrqmV8oqSwyU45WCchJTgpR5prcp5R5Xhle1h4PRqAAAAAAAAAAAAAAR+p2fDUn/AFMnaSG8iRp49zgjJxmprdNPdbE9Nxaa7ElpNYfcueg61DOgqr5KOTFc13T80eo4fxCN65ZdJL+Tz+s0bpfMvd+xN7otCCZAAAAAAAABhvZbsA4NS1XGwYbTbna/hqgt5P8AYh6nWV0b9X5EijTTufTovMq2Y9W1ixy/h7fZL4a0tkvzKC/9ZrHlwePLsW9S02mWMrJrj2f1SUf/ABWvWyP7nNcM1X/T+UdP1+n/AO33OfL07Nw0nkUOEfvbpr6HG7SXULNkcHWrU1WvEGe9NyHFumb2i3vFvx8Cq1VWfbRpdD9yJL6EEj7gwAAAAAAAAAAAa7rVTBzl3Ll5nSuDnLBmMeZ4IdqzIv3UZSsk/hXMt663hQiid7MI9djujoGpyW6xWl5ziv1LBcL1b/Z/K/JGeu06/d/DMS0fVKmprFsTjz3g1+jNXw/VQeeR9DP6zTyWOYmNM126iSo1WqyC6K5wf+r9y00vEZw9jUpr1x9yv1GijL26X8s/YsldkbEnCSlF9GnumXcZKSytisaaeGezJgAAAAAAxJbrYA1Qx6oScowipPq9ubNFXFPKRnmltk2cJsYHCMA49Y9nHTcn2m3D7N9foR9XyqiTltg66dPxY8u589XLb6Hiux6pkphZcbI+zte1nd4Mr9RRyvmiQ7amnmOx2LmRTiDAAAAAAAAB4ssjVBym9l595vCDk8Iyk5PCInKyHfPfZqK+FeBZ01KtEyuCguhJ9knWtTkpJcTrfD+pdcH5f1HXy+xC4kpeCktsl0UeXU9Rgohw+ZkGJQUltLZrwaMNJ7jbYxVTCrlXFRXglsjEYRjsjLbk8s2GxgAAAAAAAAAAGGwCs9sM+KrjhRa4pe9PyRR8Y1KUVSt3v8C14ZT7TtfbYqrfNeZ50uTbOm2uKlZVZCL6SlBpfmdJ1Tgsyi0vhg1U4SfKmdGPnyh7tvvR8UQbdMpdYnKdOeqJCq6FvwST8u8hTqlD3lgjSjKO5s9UczAMgGDGUYbUVvJ7LxZlLOxnfY5b8+qtfZ+/L6EmvSzk+vRHWNMnuR9llt9i4t5Sb5JLcnwrUekVlkpRjBdDxbXZS0roTrb6ccWtzpKLg8SWBCcZe68mzDyXh5dd8VzhJPbx8TpRc6bFNdjW2tWwcH3PotF8b6YW1tOM1ume1rmrIqS7nl5xcJOL7G03NQAAAAAAAAAAAAAADk1HMrwsWd9vSK5L7z7kcdRfGit2S7HSml3TUF3KpiaRmatfPKyvsoWS4nOS5v0R5ynQ3aufi2dE/wDehc2aurTR8OHVos+DpWJhRXsalx99j5yf4l9p9FRR7kevn3Km7UWW+8+h03UxuplXPnGSaaO84RnFprc5Qk4SUl2PnFseC2yC5KE3H8meImuWco+TZ6qLzFM8JpdHts+u+xp6G76m2GTdFe5Y9vB8zm6q5djSVUXujas/IS+KP5Gn6Ws08GB5lnZDXx7eiMrTVrsPBgjTOdlj9+bl+O50ioR6LodFFLZHldOpsZLL2Nx4tZGQ176agn4d5fcFqi1KeOqeCo4pN+zDsWedULa3GyKlGXVSW6L6UVJNS6oqYyceqIDU+zNNnFZgNUz+58r/AGKfVcIhP2qej8uxY0cSlH2bFlGns5k3YGQ9Mzoyg5Piq4unon9Tnwy2enn+mtWPL8G+uqjbHx6+vmWjqXxVGQAAAAAAAAAAAAAAcmRh15N0J3x9oofBB/Dv47d5wsojZJOfVLsdI2yhFqPc6YpHc5nroAeJ8lu+i5mG8LI9D5rc/aZFrj81je3juzw1ntWSxu2/uesjhQWfJFo0Xs/XCCyM6CnY/hqlzUfVeJf6LhcYLnu6vy7FNq9e5Pkr28zv1fR6MzHkqqoQtit4Sitt/L0Jmr0Nd0OiXMtiPptXOqfV5RRWmt01s1y2Z5Hr3PRpoluzumRz8p2XLemrnJd0n3L9Sx4bo1qLOaXuog6/UumHLHdlqydKwsmpVzxq0tvdcYpOPo0ehs0dFkOVxKWGothLKl1Kbq2mW6bfwz3lXL4JpdfL1PL6zRy00sPbsy/02pjfHPfyJvsZL7HKhv8AOn9C24I/ZnH1/sV/FF7UWWZdC9RVDZAHPl4dOTFK2tScXvF98X5M5WUws95G8LJVvMWbalKMUpy4mu/xN4ppYZq2m+hsNjAAAAAAAAAAAAAAAAAABy6jcqMK+19IQb+hx1E1XVKT7Js6Uw57Ix8yudltL42s/Jjuv5UWv9RScJ0XN/Xs+X5/BZ8Q1WF4UPmWzZeB6EqA1yAKF2ixnjardwpcFn2i28+v1PI8TqdWoljZ9T0egs8ShenQtHZrFWNpdW69+3eyX4/42L7hlKq0y9ev1KfXWeJc/ToSuyLAiHLqWHVnY0se5e7Jcmu5+Jw1GnhfW4SOlN0qZqcSv9moWYOrZOHetpOG68Hs+pS8MjKjUzpn5Z+hZ65xtojZEtUeSPQlQZAAAAAAAAAAAAAAAAAAAAAAABxaljSy6HRxbRnJcf8A8781+JH1NTthyee/w/ydabPDnz+W3xOquEYQjGK2ilskd0klhHNtt5Z7MmDD6AFa7V4jvsw5Q6yn7J/j/wAFHxihzdbXnj6lpw23kjNfP6FipioRUV0iki7Swisby2zYZMAA4cvEU8ujKr2VlT2f9UX3f2ZGsoTsjat19mdYW4hKD2f3O2PREk5GQAAAAAAAAAAAAAAAAAAAAAAAAAAAAwDnyceN/s+L+XNTX4HOyvnx6M3hNwzjubo9Tpg0PQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==" alt="Girl in a jacket" width="90" height="600"></img>
        <div class="weather-temperature">12</div>
        <div>Monday, 16:00</div>
        <div>Mostly Cloudy</div>
        <div>Rain</div>
  </div>
  <div class="bg-gray-400 rounded-[12px] h-full">
    Days of the week
    <div class="col-span-2 row-span-3 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                tue
                </div>
            <div class="col-span-2 row-span-3 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                wed
                </div>
            <div class="col-span-2 row-span-3 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                Thurs
                </div>
                <div class="col-span-2 row-span-3 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                Fri
                </div>
            <div class="col-span-2 row-span-3 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                Sat
                </div>
            <div class="col-span-2 row-span-3 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                Sun
                </div>
            <div class="col-span-3 row-span-4 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                humidity
                </div>
            <div class="col-span-3 row-span-4 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                Visibility
                </div>
            <div class="col-span-3 row-span-4 bg-indigo-200 rounded-[12px] flex justify-center items-center">
                Air quality
                </div>
  </div>
</div>
    </div>);
}

export default Main