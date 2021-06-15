import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

const BreakpointsContext = React.createContext({
	isDown: () => {},
	isUp: () => {},
	isBetween: () => {},
} as any);

export const useBreakpoints = () => React.useContext(BreakpointsContext);

const BreakpointsProvider = ({ children }: any) => {
	const windowWidth = useWindowWidth();

	const isDown = React.useCallback((breakpoint) => windowWidth < breakpoint, [windowWidth]);

	const isUp = React.useCallback((breakpoint) => windowWidth >= breakpoint, [windowWidth]);

	const isBetween = React.useCallback(
		(breakpointFrom, breakpointTo) => breakpointFrom <= windowWidth && windowWidth <= breakpointTo,
		[windowWidth],
	);

	return (
		<BreakpointsContext.Provider value={{ isDown, isUp, isBetween } as any}>
			{children}
		</BreakpointsContext.Provider>
	);
};

export default BreakpointsProvider;
