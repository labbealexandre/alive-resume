/*[object Object]*/
import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { defaultTransformation, ShowProps } from './types';
import { Animate } from './component';

export type StoryAnimatedProps = {
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  translationX: number;
  translationY: number;
  translationZ: number;
  scaleParam: number;
  perspectiveParam: number;
};

export const animatedArgTypes = {
  rotationX: {
    defaultValue: 80,
    control: {
      type: 'range',
      min: -180,
      max: 180,
      step: 5,
    },
  },
  rotationY: {
    defaultValue: 0,
    control: {
      type: 'range',
      min: -180,
      max: 180,
      step: 5,
    },
  },
  rotationZ: {
    defaultValue: 20,
    control: {
      type: 'range',
      min: -180,
      max: 180,
      step: 5,
    },
  },
  translationX: {
    defaultValue: 200,
    control: {
      type: 'range',
      min: -400,
      max: 400,
      step: 10,
    },
  },
  translationY: {
    defaultValue: 0,
    control: {
      type: 'range',
      min: -400,
      max: 400,
      step: 10,
    },
  },
  scaleParam: {
    defaultValue: 0.5,
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.1,
    },
  },
  perspectiveParam: {
    defaultValue: 0,
    control: {
      type: 'range',
      min: 0,
      max: 1000,
      step: 50,
    },
  },
  transformed: {
    table: {
      disable: true,
    },
  },
  toggleTransformed: {
    table: {
      disable: true,
    },
  },
  rotation: {
    table: {
      disable: true,
    },
  },
  translation: {
    table: {
      disable: true,
    },
    control: {
      disable: true,
    },
  },
  show: {
    table: {
      disable: true,
    },
  },
  toggleShow: {
    table: {
      disable: true,
    },
  },
};

export const WithAnimatedStory = <P extends {}>(
  Component: React.ComponentType<P & ShowProps>,
): React.FC<StoryAnimatedProps & P> => {
  const Template: Story<StoryAnimatedProps & P> = (props: StoryAnimatedProps & P) => {
    const {
      rotationX,
      rotationY,
      rotationZ,
      translationX,
      translationY,
      scaleParam,
      perspectiveParam,
    } = props;

    const transformationFromControls = {
      translation: { x: translationX, y: translationY, z: 0 },
      scale: { x: scaleParam, y: scaleParam, z: scaleParam },
      perspective: { x: perspectiveParam, y: perspectiveParam, z: perspectiveParam },
      rotation: { x: rotationX, y: rotationY, z: rotationZ },
      origin: { x: 50, y: 50, z: 0 },
    };

    const [show, setShow] = useState(false);
    const toggleShow = () => !show && setShow(!show);

    const transformationToPass = show ? defaultTransformation : transformationFromControls;

    const AnimatedComponent = Animate(Component);

    return (
      <AnimatedComponent
        show={show}
        toggleShow={toggleShow}
        transformation={transformationToPass}
        {...props}
      />
    );
  };

  return Template;
};
