import  { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

const Stars = ({number}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      options={{
        background: {
          color: '#0e0e0e',
          opacity: 0
        },
        fullScreen: {enable: true},
        fpsLimit: 60,
        particles: {
          color: '#ffffff',
          number: {
            density: {
              enable: true,
              area: 540
            },
            limit: 0,
            value: number
          },
          opacity: {
            value: {
                min: 0.1,
                max: 0.8
            },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
              startValue: "random",
              destroy: "none"
            }
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: {
              enable: true,
            },
            value: {
                min: 0.5,
                max: 1.5
            }
          },
          move: {
            enable: false  // Disable movement to make it look more like stars
          }
          
        },
        emitters: {
          size: {
            width: 0,
            height: 15
          },
          position: {
            x: 0,
            y: 30
          },
          rate: {
            delay: { min: 3, max: 6 },
            quantity: 1
          },
          particles: {
            move: {
              enable: true,
              speed: 10,
              angle: {
                value: 10,
                offset: -10
              },
              gravity: {
                enable: true,
                acceleration: 2
              },
              direction: "right",
              outModes: "destroy"
            },
            opacity: {
              value: 0.7,
              animation: {
                enable: false
              }
            },
            effect: {
              type: "trail",
              options: {
                trail: {
                  fade: true,
                  length: {
                    min: 10,
                    max: 30
                  }
                }
              }
            }
          }
        }
      }}
    />
  );
};

export default Stars;