import {Flex, IconButton} from "@chakra-ui/react";
import {MdDarkMode, MdLightMode} from "react-icons/md";
import Link from "next/link";

export default function Header () {
    let darkMode = false;
    return(
        <header >
            <nav>
                <Flex className='nav-container' alignItems='center' justifyContent='space-between' flexWrap='nowrap'>
                    <a>
                        <svg width="34.658" height="28.113" viewBox="0 0 34.658 28.113"
                             xmlns="http://www.w3.org/2000/svg"><g id="svgGroup"
                                                                   strokeLinecap="round" fillRule="evenodd"
                                                                   fontSize="9pt" stroke="#000"
                                                                   strokeWidth="0.25mm" fill="#000" style={{stroke:"#000",strokeWidth:"0.25mm",fill:"#000"}}><path d="M 13.655 4.683 L 13.655 11.45 Q 13.73 11.66 10.781 12.864 A 112.144 112.144 0 0 1 9.878 13.228 A 3.511 3.511 0 0 0 9.908 13.655 Q 9.998 14.371 10.349 15.607 A 30.476 30.476 0 0 0 10.365 15.663 A 28.45 28.45 0 0 0 11.091 17.845 A 34.372 34.372 0 0 0 11.638 19.209 Q 12.168 20.439 12.877 21.508 A 8.849 8.849 0 0 0 13.565 22.417 Q 13.967 22.88 14.398 23.225 A 3.58 3.58 0 0 0 14.953 23.595 Q 15.299 23.778 15.64 23.841 A 1.953 1.953 0 0 0 15.996 23.875 L 15.996 24.917 A 48.994 48.994 0 0 1 14.861 25.62 Q 12.592 26.979 11.866 26.985 A 0.781 0.781 0 0 1 11.86 26.985 A 0.596 0.596 0 0 1 11.585 26.91 Q 11.276 26.748 10.903 26.241 Q 10.356 25.498 9.75 24.285 A 33.326 33.326 0 0 1 9.001 22.678 A 40.923 40.923 0 0 1 8.562 21.627 A 48.722 48.722 0 0 1 7.511 18.765 A 40.401 40.401 0 0 1 7.112 17.493 Q 6.909 16.805 6.759 16.193 A 15.525 15.525 0 0 1 6.623 15.586 Q 6.511 15.035 6.485 14.646 A 3.326 3.326 0 0 1 6.477 14.424 L 6.306 14.492 L 6.306 21.602 Q 6.306 22.883 6.58 23.447 A 0.92 0.92 0 0 0 7.131 23.922 Q 7.388 24.011 7.742 24.011 L 7.742 25.088 L 0.564 28.113 L 0 26.985 A 1.415 1.415 0 0 0 0.746 26.762 Q 0.966 26.628 1.18 26.412 A 3.596 3.596 0 0 0 1.47 26.079 A 2.667 2.667 0 0 0 1.843 25.341 Q 2.076 24.65 2.099 23.64 A 9.865 9.865 0 0 0 2.102 23.413 L 2.102 5.281 Q 2.102 3.145 0.667 2.871 L 0.667 2.102 L 4.204 0.103 A 3.838 3.838 0 0 1 5.125 0.662 A 4.967 4.967 0 0 1 5.64 1.145 A 3.831 3.831 0 0 1 5.954 1.527 Q 6.27 1.971 6.302 2.357 A 1.043 1.043 0 0 1 6.306 2.444 L 6.306 12.852 A 3.252 3.252 0 0 0 6.951 12.783 Q 7.289 12.715 7.656 12.578 A 5.127 5.127 0 0 0 8.408 12.23 A 4.095 4.095 0 0 0 8.921 11.886 Q 9.451 11.467 9.451 11.057 L 9.451 6.511 A 9.577 9.577 0 0 0 9.433 5.908 Q 9.396 5.315 9.278 4.933 A 1.747 1.747 0 0 0 9.169 4.657 A 0.938 0.938 0 0 0 8.606 4.186 Q 8.356 4.102 8.015 4.102 L 8.015 3.008 L 15.193 0 L 15.757 1.128 A 1.415 1.415 0 0 0 15.011 1.351 Q 14.791 1.485 14.577 1.701 A 3.596 3.596 0 0 0 14.287 2.034 A 2.673 2.673 0 0 0 13.914 2.769 Q 13.676 3.47 13.657 4.494 A 9.766 9.766 0 0 0 13.655 4.683 Z M 20.491 3.777 L 20.491 18.235 A 20.87 20.87 0 0 0 20.507 19.097 Q 20.543 19.954 20.654 20.554 A 6.014 6.014 0 0 0 20.662 20.593 A 4.368 4.368 0 0 0 21.029 21.676 A 5.71 5.71 0 0 0 21.431 22.371 Q 22.593 24.045 26.711 24.045 L 26.711 25.054 Q 26.577 25.054 24.707 25.784 A 200.313 200.313 0 0 0 24.131 26.011 A 56.272 56.272 0 0 1 23.288 26.342 Q 21.608 26.985 21.191 26.985 A 2.984 2.984 0 0 1 20.047 26.749 A 3.981 3.981 0 0 1 19.448 26.438 Q 18.577 25.891 17.859 24.977 Q 17.141 24.063 16.714 22.952 A 6.214 6.214 0 0 1 16.288 20.819 A 5.95 5.95 0 0 1 16.287 20.713 L 16.287 3.247 A 0.08 0.08 0 0 1 16.317 3.198 Q 16.442 3.076 17.081 2.794 A 28.174 28.174 0 0 1 17.504 2.612 Q 18.167 2.333 19.052 1.993 A 75.923 75.923 0 0 1 19.081 1.982 A 149.355 149.355 0 0 1 21.533 1.068 A 63.628 63.628 0 0 1 22.426 0.751 Q 22.779 0.629 23.103 0.522 A 35.278 35.278 0 0 1 23.721 0.325 A 21.866 21.866 0 0 1 24.049 0.226 Q 24.706 0.034 24.9 0.034 A 0.127 0.127 0 0 1 24.982 0.072 Q 25.075 0.154 25.181 0.414 A 3.798 3.798 0 0 1 25.25 0.598 A 12.034 12.034 0 0 1 25.399 1.056 Q 25.524 1.467 25.652 1.974 A 199.177 199.177 0 0 0 25.853 2.762 A 166.195 166.195 0 0 0 26.045 3.503 Q 26.404 4.939 26.805 5.623 Q 27.151 6.211 28.034 6.293 A 3.252 3.252 0 0 0 28.335 6.306 L 28.335 7.007 Q 27.549 7.332 25.72 8.237 A 136.44 136.44 0 0 1 25.282 8.45 Q 23.907 9.112 23.75 9.142 A 0.068 0.068 0 0 1 23.738 9.143 Q 23.275 9.143 22.576 6.82 A 30.853 30.853 0 0 1 22.422 6.289 Q 21.72 3.849 21.269 3.495 A 0.241 0.241 0 0 0 21.123 3.435 A 0.701 0.701 0 0 0 20.73 3.559 Q 20.63 3.625 20.534 3.728 A 1.461 1.461 0 0 0 20.491 3.777 Z M 30.42 24.746 L 30.42 22.61 Q 30.42 22.566 30.733 22.425 A 7.609 7.609 0 0 1 30.856 22.371 A 18.212 18.212 0 0 1 31.204 22.225 Q 31.358 22.162 31.528 22.096 A 31.692 31.692 0 0 1 31.881 21.96 Q 32.471 21.738 32.958 21.576 Q 33.445 21.414 33.564 21.414 A 0.295 0.295 0 0 1 33.704 21.455 Q 33.881 21.552 34.13 21.875 A 4.77 4.77 0 0 1 34.231 22.012 A 2.445 2.445 0 0 1 34.529 22.556 A 1.902 1.902 0 0 1 34.658 23.242 L 34.658 25.789 Q 34.658 25.832 34.358 25.98 A 7.34 7.34 0 0 1 34.24 26.036 Q 33.88 26.205 33.413 26.387 A 19.502 19.502 0 0 1 33.257 26.447 A 27.624 27.624 0 0 1 32.71 26.647 A 22.22 22.22 0 0 1 32.197 26.823 Q 31.702 26.985 31.548 26.985 A 0.542 0.542 0 0 1 31.229 26.874 Q 30.995 26.706 30.779 26.284 A 3.3 3.3 0 0 1 30.421 24.85 A 3.849 3.849 0 0 1 30.42 24.746 Z"/></g></svg>
                    </a>
                    <Flex gap={3} alignItems={"center"}>
                        <Link href='/'>Home</Link>
                        <Link href='/projects'>Projects</Link>
                        <Link href='/resume'>Resume</Link>
                        <Link href='/contact'>Contact</Link>
                        {darkMode ?
                            <IconButton variant={"unstyled"} icon={<MdLightMode/>} aria-label={'efwefewf'}></IconButton>
                            :
                            <IconButton variant={"unstyled"} icon={<MdDarkMode/>} aria-label={'efwefewf'}></IconButton>
                        }
                    </Flex>
                </Flex>
            </nav>
        </header>
    )
}