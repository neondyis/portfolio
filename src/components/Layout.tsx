import Header from './Header';
import { SwitchTransition, Transition } from 'react-transition-group';
import gsap from 'gsap';
import { useRouter } from 'next/router';

function Layout ({ children }:any)  {
    const router = useRouter();

    const onPageEnter = (node: gsap.TweenTarget) => {
        gsap.fromTo(
            node,
            {
                y: 50,
                autoAlpha: 0,
                ease: 'power3',
            },
            {
                y: 0,
                autoAlpha: 1,
                duration: 0.5,
                ease: 'power3',
            }
        )
    }

    const onPageExit = (node: gsap.TweenTarget) => {
        gsap.fromTo(
            node,
            {
                y: 0,
                autoAlpha: 1,
                ease: 'power3.out',
            },
            {
                y: -50,
                autoAlpha: 0,
                duration: 0.5,
                ease: 'power3.inOut',
            }
        )
    }

    return (
        <>
            <Header />
            <SwitchTransition>
                <Transition
                    key={router.asPath} // our route as a key
                    timeout={500}
                    in={true}
                    onEnter={onPageEnter} // our enter animation
                    onExit={onPageExit} // our exit animation
                    mountOnEnter={true}
                    unmountOnExit={true}>
            <main className='p-4 mx-auto max-w-4xl'>{children}</main>
                </Transition>
            </SwitchTransition>
        </>
    )
}

export default Layout