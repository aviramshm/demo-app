import { MouseEventHandler } from 'react';

export interface CarouselButtonProps {
    /**
     * The end of the container where the button will be rendered.
     */
    alignment: 'left' | 'right';
    /**
     * If true then the button will be visible, otherwise hidden.
     */
    visible: boolean;
    /**
     * The buttons will be centered vertically based on the height of this element.
     */
    containerEl: HTMLElement;
    /**
     * A click handler for the button.
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
/**
 * A button used to scroll to the previous or next Card in a Carousel.
 */
declare const CarouselButton: import('react').ForwardRefExoticComponent<CarouselButtonProps & import('react').RefAttributes<HTMLElement>>;
export default CarouselButton;
//# sourceMappingURL=CarouselButton.d.ts.map