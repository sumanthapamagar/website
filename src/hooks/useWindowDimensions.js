import * as React from "react";
export function useWindowDimensions() {
    // the 3rd parameter is optional and only needed for server side rendering
    return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(callback) {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
}


const getSnapshot = ((value) => () => {
    if (
        !value ||
        value.width !== window.innerWidth ||
        value.height !== window.innerHeight
    ) {
        value = { width: window.innerWidth, height: window.innerHeight };
    }

    return value;
})(undefined);

const getServerSnapshot = (
    (
        value = {
            width: 0,
            height: 0,
        },
    ) =>
    () => {
        return value;
    }
)();