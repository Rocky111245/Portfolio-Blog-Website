import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particleConfig from './particleConfig';

const ParticleBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particleConfig}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
            }}
        />
    );
};

export default ParticleBackground;
