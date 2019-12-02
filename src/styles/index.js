import colors from "./colors";

export default {
    flatUIFont: "'Lato', sans-serif",
    containerMaxWidth: '60rem',
    header: {
        background: colors.black10,
        textColor: colors.white,
        userAvatar: {
            width: '2rem',
            height: '2rem',
            padding: '0 0.5rem',
        },
        userInfo: {
            background: colors.black20,
            textColor: colors.white,
        },
    },
    footer: {
        background: colors.black10,
        textColor: colors.white,
    },
    table: {
        header: {
            background: colors.black10,
            textColor: colors.white,
        },
        row: {
           border: colors.white10,
           hoverBackground: colors.white10, 
        }
    },
    pages: {
        order: {
            sidebarBackground: colors.white10,
            minWidthSidebar: '20%',
            minWidthSidebarItem: '50%',
            sidebarItemTextColor: colors.black,
            sidebarActiveItemTextColor: colors.white,
            sidebarActiveItemBackground: colors.black10,
            confirmSectionBorder: colors.white10,
            customerLevelBackground: colors.white10,
        }
    }
}