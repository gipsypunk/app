import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const Sprite = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg style="display: none;"><symbol id="start" viewBox="0 0 406.125 406.125"><g><path d="M260.133 155.967c-4.487 0-9.25-3.463-10.64-7.73L205.574 13.075c-1.39-4.268-3.633-4.268-5.023 0L156.64 148.237c-1.39 4.268-6.153 7.73-10.64 7.73H3.88c-4.487 0-5.186 2.138-1.553 4.78l114.971 83.521c3.633 2.642 5.454 8.242 4.064 12.51l-43.91 135.154c-1.39 4.268.431 5.592 4.064 2.951l114.971-83.521c3.633-2.642 9.519-2.642 13.152 0l114.971 83.529c3.633 2.642 5.454 1.317 4.064-2.951l-43.911-135.154c-1.39-4.268.431-9.868 4.064-12.51l114.971-83.521c3.633-2.642 2.934-4.78-1.553-4.78H260.133v-.008z" style="" data-original="#010002"></path></g></symbol><symbol id="checkmark" viewBox="0 0 512 512"><g data-name="Layer 2 copy 10"><path d="M256 0C114.62 0 0 114.62 0 256s114.62 256 256 256 256-114.62 256-256S397.38 0 256 0zm145.81 199.7L240 361.5a34.79 34.79 0 0 1-49.21 0l-80.61-80.6a34.8 34.8 0 1 1 49.21-49.21l56 56L352.6 150.5a34.79 34.79 0 1 1 49.21 49.2z" data-name="63" opacity="1" data-original="#000000"></path></g></symbol><symbol id="crown" viewBox="0 0 267.5 267.5"><g><path d="M256.975 100.34a7.48 7.48 0 0 1-.198 2.229l-16.5 66a7.503 7.503 0 0 1-7.238 5.681l-99 .5H35a7.5 7.5 0 0 1-7.277-5.688l-16.5-66.25a7.488 7.488 0 0 1-.197-2.289C4.643 98.512 0 92.539 0 85.5c0-8.685 7.065-15.75 15.75-15.75S31.5 76.815 31.5 85.5c0 4.891-2.241 9.267-5.75 12.158l20.658 20.814c5.221 5.261 12.466 8.277 19.878 8.277 8.764 0 17.12-4.162 22.382-11.135l33.95-44.984A15.694 15.694 0 0 1 118 59.5c0-8.685 7.065-15.75 15.75-15.75s15.75 7.065 15.75 15.75c0 4.212-1.672 8.035-4.375 10.864.009.012.02.022.029.035l33.704 45.108c5.26 7.04 13.646 11.243 22.435 11.243 7.48 0 14.514-2.913 19.803-8.203l20.788-20.788C238.301 94.869 236 90.451 236 85.5c0-8.685 7.065-15.75 15.75-15.75s15.75 7.065 15.75 15.75c0 6.851-4.405 12.678-10.525 14.84zm-18.308 97.91a7.5 7.5 0 0 0-7.5-7.5h-194a7.5 7.5 0 0 0-7.5 7.5v18a7.5 7.5 0 0 0 7.5 7.5h194a7.5 7.5 0 0 0 7.5-7.5v-18z" opacity="1" data-original="#000000"></path></g></symbol><symbol id="fb" viewBox="0 0 155.139 155.139"><g><path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" style="" data-original="#010002" class=""></path></g></symbol><symbol id="inst" viewBox="0 0 512 512"><g><path d="M404.831 94.739c-6.853 0-12.43 5.577-12.43 12.43s5.577 12.43 12.43 12.43c6.854 0 12.43-5.576 12.43-12.43s-5.576-12.43-12.43-12.43zM256 145.804c-60.762 0-110.196 49.434-110.196 110.196S195.238 366.197 256 366.197c60.763 0 110.197-49.434 110.197-110.196S316.763 145.804 256 145.804z" opacity="1" data-original="#000000"></path><path d="M371.643 0H140.357C62.964 0 0 62.964 0 140.358v231.285C0 449.037 62.964 512 140.357 512h231.286C449.037 512 512 449.036 512 371.643V140.358C512 62.964 449.037 0 371.643 0zM256 396.432c-77.435 0-140.431-62.997-140.431-140.432S178.566 115.57 256 115.57 396.432 178.566 396.432 256 333.434 396.432 256 396.432zm148.831-246.596c-23.526 0-42.666-19.14-42.666-42.666 0-23.526 19.14-42.667 42.666-42.667 23.526 0 42.666 19.14 42.666 42.666s-19.14 42.667-42.666 42.667z" opacity="1" data-original="#000000"></path></g></symbol><symbol id="x" viewBox="0 0 1226.37 1226.37"><g><path d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z" opacity="1" data-original="#000000"></path></g></symbol><symbol id="check" viewBox="0 0 408.576 408.576"><g><path d="M204.288 0C91.648 0 0 91.648 0 204.288s91.648 204.288 204.288 204.288 204.288-91.648 204.288-204.288S316.928 0 204.288 0zm114.176 150.528-130.56 129.536c-7.68 7.68-19.968 8.192-28.16.512L90.624 217.6c-8.192-7.68-8.704-20.48-1.536-28.672 7.68-8.192 20.48-8.704 28.672-1.024l54.784 50.176L289.28 121.344c8.192-8.192 20.992-8.192 29.184 0s8.192 20.992 0 29.184z" opacity="1" data-original="#000000"></path></g></symbol><symbol id="order" viewBox="0 0 128 128"><g><path d="M2.013 17.799h123.976v3.997H2.013z" opacity="1" data-original="#000000" class=""></path><path fill-rule="evenodd" d="M11.905 8.956a1.93 1.93 0 0 1 1.927 1.927c0 1.077-.85 1.956-1.927 1.956s-1.928-.879-1.928-1.956a1.93 1.93 0 0 1 1.928-1.927zm16.892 0a1.93 1.93 0 0 1 1.927 1.927c0 1.077-.85 1.956-1.927 1.956a1.96 1.96 0 0 1-1.956-1.956c.001-1.048.879-1.927 1.956-1.927zm-8.446 0a1.93 1.93 0 0 1 1.927 1.927c0 1.077-.85 1.956-1.927 1.956s-1.956-.879-1.956-1.956c0-1.048.879-1.927 1.956-1.927z" clip-rule="evenodd" opacity="1" data-original="#000000" class=""></path><path d="M113.572 8.899c1.105 0 1.984.879 1.984 1.984s-.879 2.013-1.984 2.013H45.52a2.021 2.021 0 0 1-2.013-2.013c0-1.105.907-1.984 2.013-1.984zM82.508 62.724c0-3.798 1.758-6.236 4.055-7.369a6.86 6.86 0 0 1 2.918-.652c1.021 0 2.012.227 2.92.68 2.324 1.133 4.139 3.6 4.139 7.341v19.302c.51.113 1.445.34 2.322.566 3.432.794 6.293 1.475 10.857 3.09 1.756.624 3.43 1.928 4.648 3.516 1.189 1.586 1.955 3.457 1.955 5.3v26.245c0 3.969-3.287 7.257-7.285 7.257H89.764c-3.344 0-6.973-2.126-9.07-4.705l-14.227-17.403c-2.354-2.777-2.835-5.726-2.155-8.077.311-1.077.907-2.041 1.672-2.807s1.758-1.332 2.863-1.616c2.805-.736 5.695.539 7.736 2.467l5.924 5.158V62.724zm5.783-3.769c-.992.51-1.785 1.729-1.785 3.77v42.715c0 .453-.17.936-.512 1.304-.707.822-1.984.907-2.805.198l-9.213-8.077c-1.389-1.105-3.543-2.637-5.186-1.021-1.588 1.559-.482 4.053.736 5.47l14.143 17.346c.795 1.049 3.346 3.345 6.094 3.345h19.273a3.26 3.26 0 0 0 3.26-3.26V94.498c0-.964-.424-1.984-1.105-2.892-.766-.992-1.785-1.786-2.807-2.153-4.307-1.531-7.113-2.183-10.457-2.977-.566-.142-1.135-.283-2.551-.624a3.606 3.606 0 0 1-2.041-1.304 3.698 3.698 0 0 1-.795-2.296V62.724c0-1.984-.82-3.231-1.869-3.741a2.635 2.635 0 0 0-1.191-.284 3 3 0 0 0-1.189.256zM29.137 31.206H54.76c1.304 0 2.522.539 3.373 1.417a4.71 4.71 0 0 1 1.417 3.373v36.847a4.714 4.714 0 0 1-1.417 3.373v.028a4.802 4.802 0 0 1-3.373 1.39H16.354a4.866 4.866 0 0 1-3.401-1.39v-.028a4.714 4.714 0 0 1-1.417-3.373V35.996c0-1.304.539-2.522 1.417-3.373a4.773 4.773 0 0 1 3.401-1.417zm11.281 36.479c-1.105 0-2.012-.907-2.012-2.013s.907-1.984 2.012-1.984h7.625c1.105 0 1.984.878 1.984 1.984s-.879 2.013-1.984 2.013zm3.543-32.482v13.633a3.016 3.016 0 0 1-1.814 2.777 3.053 3.053 0 0 1-3.288-.538l-3.231-2.891-3.43 3.004a3.088 3.088 0 0 1-3.288.453c-.539-.227-.964-.623-1.304-1.105a3.182 3.182 0 0 1-.482-1.672V35.203h-10.77a.79.79 0 0 0-.567.227.79.79 0 0 0-.227.567v36.847a.79.79 0 0 0 .227.567.79.79 0 0 0 .567.227H54.76a.79.79 0 0 0 .567-.227.794.794 0 0 0 .227-.567V35.996a.79.79 0 0 0-.227-.567.79.79 0 0 0-.567-.227H43.961zm-3.996 0h-8.843v11.592l2.522-2.182c.539-.482 1.332-.737 2.041-.737.708 0 1.445.255 2.012.766l2.268 2.069z" opacity="1" data-original="#000000" class=""></path><path d="M76.301 64.935c1.105 0 2.014.879 2.014 1.984a2.021 2.021 0 0 1-2.014 2.013h-1.559a6.07 6.07 0 0 1-6.064-6.066V52.492c0-3.345 2.748-6.066 6.064-6.066h34.863c3.316 0 6.037 2.721 6.037 6.066v10.374c0 3.345-2.721 6.066-6.037 6.066h-5.896a2.02 2.02 0 0 1-2.012-2.013c0-1.105.906-1.984 2.012-1.984h5.896c1.133 0 2.041-.935 2.041-2.069V52.492c0-1.134-.908-2.069-2.041-2.069H74.742a2.08 2.08 0 0 0-2.068 2.069v10.374a2.08 2.08 0 0 0 2.068 2.069zM13.548 95.972c-1.105 0-2.012-.907-2.012-2.013s.907-1.984 2.012-1.984H23.1c1.105 0 2.013.879 2.013 1.984s-.907 2.013-2.013 2.013zm0-8.447c-1.105 0-2.012-.907-2.012-1.984a2.02 2.02 0 0 1 2.012-2.013h25.878c1.105 0 1.984.907 1.984 2.013a1.99 1.99 0 0 1-1.984 1.984z" opacity="1" data-original="#000000" class=""></path><path d="M57.027 102.462c1.077 0 1.984.907 1.984 2.013s-.907 1.984-1.984 1.984H5.697a5.476 5.476 0 0 1-4.082-1.786C.595 103.596 0 102.094 0 100.506V5.867C0 2.664 2.664 0 5.867 0h116.236C125.336 0 128 2.664 128 5.867v94.639c0 1.616-.709 3.118-1.842 4.195-1.105 1.077-2.607 1.758-4.225 1.758-1.105 0-2.012-.879-2.012-1.984s.906-2.013 2.012-2.013c.539 0 1.049-.227 1.447-.624.367-.368.623-.85.623-1.332V5.867c0-1.02-.852-1.871-1.9-1.871H5.867a1.888 1.888 0 0 0-1.871 1.871v94.639c0 .567.198 1.105.539 1.446.312.312.708.51 1.162.51z" opacity="1" data-original="#000000" class=""></path></g></symbol><symbol id="confirm" viewBox="0 0 512 512"><g><path d="M116.973 94.471a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-60 0a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm30 0a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-1.645 79.453.138.001 67.809.017h.004c4.685 0 8.662-3.035 9.899-7.553 1.238-4.52-.641-9.159-4.673-11.544l-10.313-6.102a86.928 86.928 0 0 0 25.751-62.331C173.646 39.444 135.204.685 88.25.009 39.595-.69 0 38.667 0 86.973c0 46.323 38.168 85.948 85.328 86.951zM36.45 35.713c13.83-13.632 32.11-20.977 51.585-20.706 38.853.559 70.662 32.633 70.908 71.499a71.946 71.946 0 0 1-24.671 54.708 10.985 10.985 0 0 0-3.709 9.258 10.974 10.974 0 0 0 5.328 8.42l.075.044-50.426-.012C46.558 158.176 15 126.062 15 86.973c0-19.421 7.618-37.625 21.45-51.26zM504.5 497H497V385.31c0-29.262-17.291-55.834-44.135-67.733l-39.526-16.941c9.618-3.035 18.307-8.447 25.377-15.954 10.667-11.325 16.784-26.692 16.784-42.161 0-14.214-4.966-27.63-14.363-38.801a77.647 77.647 0 0 1-18.227-49.949v-35.94c0-31.478-12.259-61.066-34.517-83.313C366.135 12.258 336.544 0 305.07 0c-64.972 0-117.83 52.858-117.83 117.83v34.77c.004 18.888-7.419 36.917-19.481 51.45-15.181 18.29-18.335 43.019-8.23 64.536 7.5 15.972 21.028 27.447 37.223 32.304l-39.25 17.068c-27.537 11.588-45.331 38.379-45.331 68.253v88.29c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-88.29c0-23.822 14.189-45.187 36.231-54.462l49.198-21.394V355.5h-22.603a22.534 22.534 0 0 0-16.728 7.452 22.53 22.53 0 0 0-5.646 17.419L179.986 497H7.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h497c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zm-74.839-283.622c7.091 8.43 10.839 18.507 10.839 29.142 0 11.687-4.63 23.305-12.703 31.877-8.548 9.075-20.291 14.073-33.066 14.073h-9.774l-12.839-5.503a34.225 34.225 0 0 1-20.455-26.99c23.141-12.46 38.908-36.914 38.908-64.987v-56.383a97.1 97.1 0 0 0 6.575.23c3.607 0 7.2-.205 10.765-.609v19.542a92.662 92.662 0 0 0 21.75 59.608zM306.893 331.779a277.858 277.858 0 0 1-79.293-10.09v-17.857l2.169-.943.052-.022 13.38-5.818a49.251 49.251 0 0 0 28.61-35.235 73.511 73.511 0 0 0 20.56 2.937h24.439a73.511 73.511 0 0 0 20.635-2.959 49.224 49.224 0 0 0 28.762 34.962l14.28 6.12.027.011 1.058.453v16.877a278.41 278.41 0 0 1-74.679 11.564zm74.677 4.052v19.67H227.6v-18.28a293.142 293.142 0 0 0 79.555 9.556 293.35 293.35 0 0 0 74.415-10.946zm26.34-216.727c-20.659 2.791-43.946-2.743-59.99-15.174a7.5 7.5 0 0 0-9.187 11.857c10.489 8.126 23.14 13.85 36.838 16.736v40.831c-3.604 8.214-7.616 15.045-16.661 22.507a57.508 57.508 0 0 1-12.44 7.821c-3.645-7.113-11.048-11.995-19.574-11.995H309.32c-12.123 0-21.985 9.863-21.985 21.985s9.862 21.985 21.985 21.985h17.576c10.202 0 18.802-6.986 21.271-16.424 10.033-3.823 26.392-17.461 26.396-17.466-5.079 27.267-29.035 47.98-57.752 47.98H292.37c-32.4 0-58.76-26.359-58.76-58.76v-57.974c25.473-3.993 49.538-12.613 71.608-25.667 33.604-19.877 55.159-45.851 68.167-66.372 22.257 19.823 34.918 48.242 34.525 78.13zm-74.031 94.589c-.011 3.843-3.139 6.966-6.984 6.966h-17.576c-3.852 0-6.985-3.134-6.985-6.985s3.134-6.985 6.985-6.985h17.576c3.844 0 6.971 3.121 6.984 6.962zM202.24 117.83C202.24 61.129 248.369 15 305.07 15c20.335 0 39.767 5.87 56.372 16.798-11.971 19.189-32.12 43.865-63.861 62.641-21.775 12.88-45.66 21.103-70.994 24.441h-24.348v-1.05zm-29.135 144.38c-7.605-16.198-5.231-34.813 6.187-48.569 14.327-17.261 22.964-38.589 22.948-61.041v-18.72h16.37v57.11c0 28.089 15.787 52.555 38.949 65.008a34.243 34.243 0 0 1-20.34 27.294l-11.908 5.178H214.44c-17.89 0-33.728-10.062-41.335-26.26zm261.087 116.581L421.661 497H195.07l-12.531-118.209a7.409 7.409 0 0 1 1.882-5.806 7.412 7.412 0 0 1 5.576-2.484h236.737c2.154 0 4.135.882 5.576 2.484a7.409 7.409 0 0 1 1.882 5.806zM482 497h-45.255l12.363-116.627a22.535 22.535 0 0 0-5.646-17.42 22.533 22.533 0 0 0-16.728-7.452H396.57v-45.733l50.301 21.559c21.34 9.46 35.129 30.649 35.129 53.983zm-173.635-91.75c-15.715 0-28.5 12.785-28.5 28.5s12.785 28.5 28.5 28.5 28.5-12.785 28.5-28.5-12.785-28.5-28.5-28.5zm0 42c-7.444 0-13.5-6.056-13.5-13.5s6.056-13.5 13.5-13.5 13.5 6.056 13.5 13.5-6.055 13.5-13.5 13.5z" opacity="1" data-original="#000000" class=""></path></g></symbol><symbol id="car" viewBox="0 0 64 64"><g><path d="M61.707 34.293 49.293 21.879A2.978 2.978 0 0 0 47.171 21H30v2h5v15h2V23h10.171a1 1 0 0 1 .708.293L49.586 25H45a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h15v8a1 1 0 0 1-1 1h-2.08a6.991 6.991 0 0 0-13.84 0H28.92a6.991 6.991 0 0 0-13.84 0H13a1 1 0 0 1-1-1v-9h-2v9a3 3 0 0 0 3 3h2.08a6.978 6.978 0 0 0 2.031 4H2v2h48a7.006 7.006 0 0 0 6.92-6H59a3 3 0 0 0 3-3V35a1 1 0 0 0-.293-.707ZM17 48a5 5 0 1 1 5 5 5.006 5.006 0 0 1-5-5Zm9.889 5a6.978 6.978 0 0 0 2.031-4h14.16a6.978 6.978 0 0 0 2.031 4ZM50 53a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Zm-5-17v-9h6.586L60 35.414V36Z" opacity="1" data-original="#000000" class=""></path><path d="M21 47h2v2h-2zM49 47h2v2h-2zM2 44h5v2H2zM4 40h3v2H4zM5 36h2v2H5zM15 35A13 13 0 1 0 2 22a13.015 13.015 0 0 0 13 13Zm0-24A11 11 0 1 1 4 22a11.013 11.013 0 0 1 11-11Z" opacity="1" data-original="#000000" class=""></path><path d="M15 31a1 1 0 0 0 .707-.293C16.351 30.063 22 24.29 22 20a7 7 0 0 0-14 0c0 4.29 5.649 10.063 6.293 10.707A1 1 0 0 0 15 31Zm0-16a5.006 5.006 0 0 1 5 5c0 2.566-3.147 6.531-5 8.551-1.853-2.02-5-5.985-5-8.551a5.006 5.006 0 0 1 5-5Z" opacity="1" data-original="#000000" class=""></path><path d="M18 20a3 3 0 1 0-3 3 3 3 0 0 0 3-3Zm-4 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1ZM40 40h4v2h-4z" opacity="1" data-original="#000000" class=""></path></g></symbol><symbol id="water" viewBox="0 0 340 340"><g><path d="M314.8 2.4c-1.2-1.2-3.2-2.4-5.6-2.4H30.8c-2 0-4 .8-5.6 2.4-1.2 1.6-2 3.6-1.6 6L70 333.6c.4 3.6 3.6 6.4 7.2 6.4h185.6c3.6 0 6.8-2.8 7.2-6.4L316.4 8.4c.4-2-.4-4.4-1.6-6zm-58.4 322.8H83.6L52.8 110c21.2-8.4 32.8-3.6 47.2 2.4 10 4 20.8 8.8 35.2 8.8 10.4 0 22.4-2.4 37.6-8.8 24.4-11.2 36.8-6 52.4.4 10 4 20.8 8.8 35.2 8.8 7.6 0 16-1.2 26-4.4l-30 208zM288.8 100c-28 11.2-42.4 5.2-57.6-1.2-16-6.8-33.6-14-64 0-30.4 13.2-45.2 6.8-61.2 0-14.4-6-30-12.4-55.2-3.6L39.2 14.8h261.6l-12 85.2z" opacity="1" data-original="#000000"></path></g></symbol><symbol id="filter2" viewBox="0 0 512 512"><g><path d="M240.211 426.875a7.476 7.476 0 0 1-7.484-7.483c0-4.139 3.345-7.512 7.484-7.512h144.937a16.6 16.6 0 0 0 6.435-1.276c2.069-.85 3.94-2.126 5.527-3.713a16.944 16.944 0 0 0 3.714-5.528 16.6 16.6 0 0 0 1.275-6.435v-21.855h-13.691a7.507 7.507 0 0 1-7.512-7.512v-58.678c0-4.139 3.373-7.512 7.512-7.512h13.691v-14.372c-5.726-.255-10.885-2.693-14.684-6.491a22.023 22.023 0 0 1-6.519-15.648 22.044 22.044 0 0 1 6.519-15.676c3.799-3.798 8.958-6.236 14.684-6.491v-129.97c0-7.399 1.502-14.486 4.196-21.005a55.49 55.49 0 0 1 11.934-17.83 55.324 55.324 0 0 1 17.858-11.934c6.491-2.693 13.579-4.195 20.977-4.195s14.485 1.502 20.977 4.195a55.616 55.616 0 0 1 17.858 11.934 55.49 55.49 0 0 1 11.934 17.83A54.868 54.868 0 0 1 512 110.723v18.198a7.476 7.476 0 0 1-7.483 7.483h-29.368a7.476 7.476 0 0 1-7.483-7.483v-18.198c0-5.812-4.79-10.603-10.601-10.603s-10.602 4.791-10.602 10.603v43.398c0 4.139-3.373 7.484-7.512 7.484s-7.483-3.345-7.483-7.484v-43.398c0-14.117 11.622-25.598 25.597-25.598 14.116 0 25.597 11.622 25.597 25.598v10.687h14.344v-10.687a39.98 39.98 0 0 0-3.004-15.251 40.45 40.45 0 0 0-8.731-12.983 39.611 39.611 0 0 0-12.983-8.702c-4.677-1.956-9.808-3.033-15.222-3.033s-10.574 1.077-15.251 3.033c-4.876 2.013-9.269 4.989-12.983 8.702-3.713 3.713-6.69 8.107-8.702 12.983-1.956 4.677-3.033 9.836-3.033 15.251v129.941h14.372v-52.583c0-4.139 3.345-7.483 7.483-7.483s7.512 3.345 7.512 7.483v52.612c5.726.255 10.885 2.693 14.712 6.491a22.132 22.132 0 0 1 6.491 15.676c0 6.095-2.495 11.65-6.491 15.648-3.827 3.798-8.986 6.236-14.712 6.491v14.372h13.72c4.139 0 7.483 3.373 7.483 7.512v21.855h14.854v-7.427c0-4.139 3.345-7.512 7.484-7.512s7.512 3.373 7.512 7.512v29.822c0 4.167-3.373 7.512-7.512 7.512s-7.484-3.345-7.484-7.512v-7.398h-14.854v21.827c0 4.167-3.345 7.512-7.483 7.512h-13.72v21.855c0 8.249-1.672 16.158-4.677 23.415-3.118 7.512-7.682 14.258-13.323 19.899s-12.388 10.205-19.899 13.323c-7.257 3.005-15.165 4.677-23.415 4.677H61.314c-8.249 0-16.157-1.672-23.414-4.677A61.53 61.53 0 0 1 18 438.243a61.515 61.515 0 0 1-13.323-19.899C1.673 411.085 0 403.176 0 394.928V184.566c0-16.243 6.52-31.805 18-43.314 11.481-11.48 27.072-17.972 43.314-17.972h7.172V77.926c0-6.095 2.495-11.65 6.52-15.648a22.023 22.023 0 0 1 15.647-6.52H207.3c4.139 0 7.512 3.373 7.512 7.512s-3.373 7.484-7.512 7.484H90.653c-1.956 0-3.742.822-5.046 2.126s-2.126 3.09-2.126 5.046v96.208h18.312V154.66c0-6.747 2.75-12.87 7.172-17.32 4.451-4.422 10.573-7.172 17.291-7.172 6.747 0 12.869 2.749 17.32 7.172 4.422 4.45 7.172 10.573 7.172 17.32v19.474h49.068V154.66c0-6.747 2.749-12.87 7.172-17.32 4.45-4.422 10.573-7.172 17.319-7.172 6.718 0 12.841 2.749 17.292 7.172 4.422 4.45 7.171 10.573 7.171 17.32v19.474h49.068V154.66c0-6.747 2.75-12.87 7.172-17.32 4.45-4.422 10.573-7.172 17.32-7.172s12.87 2.749 17.292 7.172c4.45 4.45 7.2 10.573 7.2 17.32v19.474h18.284V77.926c0-1.956-.822-3.742-2.126-5.046s-3.09-2.126-5.046-2.126H241.288c-4.139 0-7.512-3.345-7.512-7.484s3.374-7.512 7.512-7.512h116.646a22.024 22.024 0 0 1 15.648 6.52 22.026 22.026 0 0 1 6.52 15.648v103.72a7.476 7.476 0 0 1-7.483 7.484h-7.2v120.304c0 11.849-4.848 22.621-12.643 30.445-7.824 7.795-18.595 12.642-30.444 12.642-11.877 0-22.649-4.847-30.444-12.642-7.824-7.824-12.671-18.596-12.671-30.445V189.13h-11.821v120.304c0 11.849-4.848 22.621-12.643 30.445-7.824 7.795-18.596 12.642-30.445 12.642-11.877 0-22.649-4.847-30.472-12.642-7.796-7.824-12.643-18.596-12.643-30.445V189.13h-11.821v120.304c0 11.849-4.847 22.621-12.643 30.445-7.823 7.795-18.595 12.642-30.473 12.642-11.849 0-22.621-4.847-30.444-12.642-7.795-7.824-12.643-18.596-12.643-30.445V189.13h-7.172c-4.139 0-7.512-3.345-7.512-7.484v-14.031h-7.172c-9.269 0-16.951 7.597-16.951 16.951v210.362a16.6 16.6 0 0 0 1.276 6.435c.85 2.069 2.126 3.94 3.713 5.528 1.587 1.587 3.458 2.863 5.527 3.713a16.6 16.6 0 0 0 6.435 1.276H206.25c4.139 0 7.483 3.373 7.483 7.512s-3.345 7.483-7.483 7.483H61.314c-4.28 0-8.391-.851-12.189-2.438a32.53 32.53 0 0 1-10.375-6.945c-2.948-2.92-5.301-6.463-6.945-10.375a31.512 31.512 0 0 1-2.438-12.189V184.566c0-8.447 3.401-16.583 9.383-22.564 2.919-2.92 6.463-5.301 10.375-6.945 3.798-1.559 7.909-2.438 12.189-2.438h7.172v-14.344h-7.172c-12.359 0-23.981 4.847-32.712 13.578-8.731 8.759-13.606 20.353-13.606 32.712v210.362c0 6.264 1.247 12.246 3.515 17.66a46.717 46.717 0 0 0 10.091 15.052 46.85 46.85 0 0 0 15.052 10.091c5.414 2.268 11.395 3.515 17.66 3.515h323.834c6.265 0 12.246-1.248 17.66-3.515a46.86 46.86 0 0 0 15.053-10.091 46.701 46.701 0 0 0 10.091-15.052c2.267-5.415 3.515-11.396 3.515-17.66v-21.855h-14.372v21.855c0 4.28-.85 8.39-2.438 12.189-1.644 3.912-3.997 7.455-6.945 10.375a32.53 32.53 0 0 1-10.375 6.945 31.405 31.405 0 0 1-12.189 2.438H240.211zm54-164.752h56.212v-25.257h-56.212zm0-40.281h56.212V189.13h-56.212zm56.212 55.305h-56.212v32.287c0 7.71 3.175 14.741 8.277 19.843 5.103 5.074 12.104 8.249 19.843 8.249 7.711 0 14.74-3.175 19.843-8.249 5.102-5.103 8.249-12.133 8.249-19.843zm-154.235-15.024H252.4v-25.257h-56.211v25.257zm0-40.281H252.4V189.13h-56.211v32.712zm56.212 55.305h-56.211v32.287c0 7.71 3.175 14.741 8.277 19.843 5.074 5.074 12.104 8.249 19.842 8.249 7.711 0 14.741-3.175 19.843-8.249 5.074-5.103 8.249-12.133 8.249-19.843zm-98.023-40.281H98.165v25.257h56.212zm0 40.281H98.165v32.287c0 7.71 3.175 14.741 8.249 19.843 5.103 5.074 12.132 8.249 19.843 8.249 7.739 0 14.769-3.175 19.842-8.249 5.103-5.103 8.278-12.133 8.278-19.843zm-56.212-55.305h56.212V189.13H98.165zm11.594-105.79c-4.139 0-7.484-3.373-7.484-7.512s3.345-7.512 7.484-7.512h33.023c4.139 0 7.484 3.374 7.484 7.512 0 4.139-3.345 7.512-7.484 7.512zm196.074 0c-4.167 0-7.512-3.373-7.512-7.512s3.345-7.512 7.512-7.512h32.996c4.139 0 7.484 3.374 7.484 7.512 0 4.139-3.345 7.512-7.484 7.512zm-98.051 0c-4.139 0-7.483-3.373-7.483-7.512s3.345-7.512 7.483-7.512h33.024c4.139 0 7.484 3.374 7.484 7.512 0 4.139-3.345 7.512-7.484 7.512zm105.053 58.082h18.964V154.66a9.355 9.355 0 0 0-2.778-6.69c-1.729-1.729-4.082-2.806-6.69-2.806s-4.989 1.077-6.69 2.806a9.383 9.383 0 0 0-2.807 6.69v19.474zm-98.023 0h18.964V154.66a9.355 9.355 0 0 0-2.778-6.69c-1.729-1.729-4.11-2.806-6.69-2.806-2.608 0-4.989 1.077-6.718 2.806a9.474 9.474 0 0 0-2.778 6.69zm-98.023 0h18.964V154.66a9.47 9.47 0 0 0-2.778-6.69c-1.729-1.729-4.11-2.806-6.718-2.806-2.58 0-4.96 1.077-6.69 2.806a9.358 9.358 0 0 0-2.778 6.69zm300.306 110.893v14.343h14.372v-14.343zm28.403-29.367h-42.435c-1.956 0-3.742.822-5.046 2.126s-2.126 3.09-2.126 5.074c0 1.956.822 3.742 2.126 5.046s3.09 2.126 5.046 2.126h42.435c1.956 0 3.742-.822 5.046-2.126s2.126-3.09 2.126-5.046c0-1.984-.822-3.77-2.126-5.074s-3.09-2.126-5.046-2.126zm7.172 102.417v-43.71h-56.779v43.711l56.779-.001z" opacity="1" data-original="#000000"></path></g></symbol></svg>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``} ${validate_component(Sprite, "Sprite").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};