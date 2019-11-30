import colors from "./colors";

export const flexCenter = (flexDirection='row') => ({
    display: 'flex',
    flexDirection,
    alignItems: 'center',
    justifyContent: 'center',
})

export const setFlexMaxSize = () => ({ flexGrow: 1 })

export const setFlex = (flexDirection='row', alignItems='center', justifyContent='center') => ({
    display: 'flex',
    flexDirection,
    alignItems,
    justifyContent,
})

export const setMaxChildFlexLayout = () => ({ display: 'flex', ...setFlexMaxSize()})

export const resetSpace = () => ({ padding: 0, margin: 0});

export const removeLinkStyle = (color=colors.white) => ({ textDecoration: 'none', color});

export const contactStyle = () => ({
    textDecoration: 'none',
    '&>i': {
      fontSize: '1.5rem',
      color: colors.white,
      marginRight: '0.5rem'
    },
    '&>span': { color: colors.white}
})