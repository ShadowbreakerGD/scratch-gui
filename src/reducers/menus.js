const OPEN_MENU = 'scratch-gui/menus/OPEN_MENU';
const CLOSE_MENU = 'scratch-gui/menus/CLOSE_MENU';

const MENU_ABOUT = 'aboutMenu';
const MENU_ACCOUNT = 'accountMenu';
const MENU_FILE = 'fileMenu';
const MENU_EDIT = 'editMenu';
const MENU_HELP = 'linksMenu';
const MENU_LANGUAGE = 'languageMenu';
const MENU_LOGIN = 'loginMenu';
const MENU_ERRORS = 'errorMenu';


const initialState = {
    [MENU_ABOUT]: false,
    [MENU_ACCOUNT]: false,
    [MENU_FILE]: false,
    [MENU_EDIT]: false,
    [MENU_HELP]: false,
    [MENU_LANGUAGE]: false,
    [MENU_LOGIN]: false,
    [MENU_ERRORS]: false
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case OPEN_MENU:
        return Object.assign({}, state, {
            [action.menu]: true
        });
    case CLOSE_MENU:
        return Object.assign({}, state, {
            [action.menu]: false
        });
    default:
        return state;
    }
};
const openMenu = menu => ({
    type: OPEN_MENU,
    menu: menu
});
const closeMenu = menu => ({
    type: CLOSE_MENU,
    menu: menu
});
const openAboutMenu = () => openMenu(MENU_ABOUT);
const closeAboutMenu = () => closeMenu(MENU_ABOUT);
const aboutMenuOpen = state => state.scratchGui.menus[MENU_ABOUT];
const openAccountMenu = () => openMenu(MENU_ACCOUNT);
const closeAccountMenu = () => closeMenu(MENU_ACCOUNT);
const accountMenuOpen = state => state.scratchGui.menus[MENU_ACCOUNT];
const openFileMenu = () => openMenu(MENU_FILE);
const closeFileMenu = () => closeMenu(MENU_FILE);
const fileMenuOpen = state => state.scratchGui.menus[MENU_FILE];
const openEditMenu = () => openMenu(MENU_EDIT);
const closeEditMenu = () => closeMenu(MENU_EDIT);
const editMenuOpen = state => state.scratchGui.menus[MENU_EDIT];
const openHelpMenu = () => openMenu(MENU_HELP);
const closeHelpMenu = () => closeMenu(MENU_HELP);
const helpMenuOpen = state => state.scratchGui.menus[MENU_HELP];
const openLanguageMenu = () => openMenu(MENU_LANGUAGE);
const closeLanguageMenu = () => closeMenu(MENU_LANGUAGE);
const languageMenuOpen = state => state.scratchGui.menus[MENU_LANGUAGE];
const openLoginMenu = () => openMenu(MENU_LOGIN);
const closeLoginMenu = () => closeMenu(MENU_LOGIN);
const loginMenuOpen = state => state.scratchGui.menus[MENU_LOGIN];
const openErrorsMenu = () => openMenu(MENU_ERRORS);
const closeErrorsMenu = () => closeMenu(MENU_ERRORS);
const errorsMenuOpen = state => state.scratchGui.menus[MENU_ERRORS];

export {
    reducer as default,
    initialState as menuInitialState,
    openAboutMenu,
    closeAboutMenu,
    aboutMenuOpen,
    openAccountMenu,
    closeAccountMenu,
    accountMenuOpen,
    openFileMenu,
    closeFileMenu,
    fileMenuOpen,
    openEditMenu,
    closeEditMenu,
    editMenuOpen,
    openHelpMenu,
    closeHelpMenu,
    helpMenuOpen,
    openLanguageMenu,
    closeLanguageMenu,
    languageMenuOpen,
    openLoginMenu,
    closeLoginMenu,
    loginMenuOpen,
    openErrorsMenu,
    closeErrorsMenu,
    errorsMenuOpen
};
