import { component$ } from '@builder.io/qwik'
import styles from './hero.module.css'
import ImgThunder from '~/media/thunder.png?jsx'

export default component$(() => {
  return (
    <div class={['container', styles.hero]}>
      <ImgThunder class={styles['hero-image']} />
      <h1>
        So <span class="highlight">fantastic</span>
        <br />
        to have <span class="highlight">you</span> here
      </h1>
      <p>Have fun building your App with Qwik.</p>
      <div class={styles['button-group']}>
        <button
          onClick$={async () => {
            const defaults = {
              fullScreen: {
                zIndex: 1,
              },
              emitters: [
                {
                  position: {
                    x: 0,
                    y: 30,
                  },
                  rate: {
                    quantity: 5,
                    delay: 0.15,
                  },
                  particles: {
                    move: {
                      direction: 'top-right',
                      outModes: {
                        top: 'none',
                        left: 'none',
                        default: 'destroy',
                      },
                    },
                  },
                },
                {
                  position: {
                    x: 100,
                    y: 30,
                  },
                  rate: {
                    quantity: 5,
                    delay: 0.15,
                  },
                  particles: {
                    move: {
                      direction: 'top-left',
                      outModes: {
                        top: 'none',
                        right: 'none',
                        default: 'destroy',
                      },
                    },
                  },
                },
              ],
              particles: {
                color: {
                  value: ['#ffffff', '#FF0000'],
                },
                move: {
                  decay: 0.05,
                  direction: 'top',
                  enable: true,
                  gravity: {
                    enable: true,
                  },
                  outModes: {
                    top: 'none',
                    default: 'destroy',
                  },
                  speed: {
                    min: 10,
                    max: 50,
                  },
                },
                number: {
                  value: 0,
                },
                opacity: {
                  value: 1,
                },
                rotate: {
                  value: {
                    min: 0,
                    max: 360,
                  },
                  direction: 'random',
                  animation: {
                    enable: true,
                    speed: 30,
                  },
                },
                tilt: {
                  direction: 'random',
                  enable: true,
                  value: {
                    min: 0,
                    max: 360,
                  },
                  animation: {
                    enable: true,
                    speed: 30,
                  },
                },
                size: {
                  value: {
                    min: 0,
                    max: 2,
                  },
                  animation: {
                    enable: true,
                    startValue: 'min',
                    count: 1,
                    speed: 16,
                    sync: true,
                  },
                },
                roll: {
                  darken: {
                    enable: true,
                    value: 25,
                  },
                  enable: true,
                  speed: {
                    min: 5,
                    max: 15,
                  },
                },
                wobble: {
                  distance: 30,
                  enable: true,
                  speed: {
                    min: -7,
                    max: 7,
                  },
                },
                shape: {
                  type: ['circle', 'square', 'polygon', 'image'],
                  options: {
                    polygon: [
                      {
                        sides: 5,
                      },
                      {
                        sides: 6,
                      },
                    ],
                    image: [
                      {
                        src: 'https://particles.js.org/images/fruits/apple.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/avocado.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/banana.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/berries.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/cherry.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/grapes.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/lemon.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/orange.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/peach.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/pear.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/pepper.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/plum.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/star.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/strawberry.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/watermelon.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                      {
                        src: 'https://particles.js.org/images/fruits/watermelon_slice.png',
                        width: 32,
                        height: 32,
                        particles: {
                          size: {
                            value: 16,
                          },
                        },
                      },
                    ],
                  },
                },
              },
            }

            function loadConfetti() {
              return new Promise<(opts: any) => void>((resolve, reject) => {
                if ((globalThis as any).confetti) {
                  return resolve((globalThis as any).confetti as any)
                }
                const script = document.createElement('script')
                script.src =
                  'https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.11.0/tsparticles.confetti.bundle.min.js'
                script.onload = () => resolve((globalThis as any).confetti as any)
                script.onerror = reject
                document.head.appendChild(script)
                script.remove()
              })
            }

            const confetti = await loadConfetti()

            function shoot() {
              confetti('tsparticles', defaults)
            }

            setTimeout(shoot, 0)
            setTimeout(shoot, 100)
            setTimeout(shoot, 200)
            setTimeout(shoot, 300)
            setTimeout(shoot, 400)
          }}
        >
          Time to celebrate
        </button>
        <a
          href="https://qwik.builder.io/docs"
          target="_blank"
          class="button button-dark"
          rel="noreferrer"
        >
          Explore the docs
        </a>
      </div>
    </div>
  )
})
