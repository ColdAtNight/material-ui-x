import { CSSInterpolation } from '@mui/system';
import { darken, lighten, alpha, styled } from '@mui/material/styles';
import { gridClasses } from '../../gridClasses';

export const GridRootStyles = styled('div', {
  name: 'MuiDataGrid',
  slot: 'Root',
  overridesResolver: (props, styles) => [
    { [`&.${gridClasses.autoHeight}`]: styles.autoHeight },
    { [`& .${gridClasses.editBooleanCell}`]: styles.editBooleanCell },
    { [`& .${gridClasses['cell--editing']}`]: styles['cell--editing'] },
    { [`& .${gridClasses['cell--textCenter']}`]: styles['cell--textCenter'] },
    { [`& .${gridClasses['cell--textLeft']}`]: styles['cell--textLeft'] },
    { [`& .${gridClasses['cell--textRight']}`]: styles['cell--textRight'] },
    { [`& .${gridClasses['cell--withRenderer']}`]: styles['cell--withRenderer'] },
    { [`& .${gridClasses.cell}`]: styles.cell },
    { [`& .${gridClasses.cellCheckbox}`]: styles.cellCheckbox },
    { [`& .${gridClasses.checkboxInput}`]: styles.checkboxInput },
    { [`& .${gridClasses['columnHeader--alignCenter']}`]: styles['columnHeader--alignCenter'] },
    { [`& .${gridClasses['columnHeader--alignLeft']}`]: styles['columnHeader--alignLeft'] },
    { [`& .${gridClasses['columnHeader--alignRight']}`]: styles['columnHeader--alignRight'] },
    { [`& .${gridClasses['columnHeader--dragging']}`]: styles['columnHeader--dragging'] },
    { [`& .${gridClasses['columnHeader--moving']}`]: styles['columnHeader--moving'] },
    { [`& .${gridClasses['columnHeader--numeric']}`]: styles['columnHeader--numeric'] },
    { [`& .${gridClasses['columnHeader--sortable']}`]: styles['columnHeader--sortable'] },
    { [`& .${gridClasses['columnHeader--sorted']}`]: styles['columnHeader--sorted'] },
    { [`& .${gridClasses.columnHeader}`]: styles.columnHeader },
    { [`& .${gridClasses.columnHeaderCheckbox}`]: styles.columnHeaderCheckbox },
    { [`& .${gridClasses.columnHeaderDraggableContainer}`]: styles.columnHeaderDraggableContainer },
    { [`& .${gridClasses.columnHeaderDropZone}`]: styles.columnHeaderDropZone },
    { [`& .${gridClasses.columnHeaderTitle}`]: styles.columnHeaderTitle },
    { [`& .${gridClasses.columnHeaderTitleContainer}`]: styles.columnHeaderTitleContainer },
    { [`& .${gridClasses.columnHeaderWrapper}`]: styles.columnHeaderWrapper },
    { [`& .${gridClasses.columnsContainer}`]: styles.columnsContainer },
    { [`& .${gridClasses['columnSeparator--resizable']}`]: styles['columnSeparator--resizable'] },
    { [`& .${gridClasses['columnSeparator--resizing']}`]: styles['columnSeparator--resizing'] },
    { [`& .${gridClasses.columnSeparator}`]: styles.columnSeparator },
    { [`& .${gridClasses.editBooleanCell}`]: styles.editBooleanCell },
    { [`& .${gridClasses.editInputCell}`]: styles.editInputCell },
    { [`& .${gridClasses.filterIcon}`]: styles.filterIcon },
    { [`& .${gridClasses.footerContainer}`]: styles.footerContainer },
    { [`& .${gridClasses.iconButtonContainer}`]: styles.iconButtonContainer },
    { [`& .${gridClasses.iconSeparator}`]: styles.iconSeparator },
    { [`& .${gridClasses.main}`]: styles.main },
    { [`& .${gridClasses.menuIcon}`]: styles.menuIcon },
    { [`& .${gridClasses.menuIconButton}`]: styles.menuIconButton },
    { [`& .${gridClasses.menuOpen}`]: styles.menuOpen },
    { [`& .${gridClasses.menuList}`]: styles.menuList },
    { [`& .${gridClasses.overlay}`]: styles.overlay },
    { [`& .${gridClasses['row--editable']}`]: styles['row--editable'] },
    { [`& .${gridClasses['row--editing']}`]: styles['row--editing'] },
    { [`& .${gridClasses.row}`]: styles.row },
    { [`& .${gridClasses.rowCount}`]: styles.rowCount },
    { [`& .${gridClasses.scrollArea}`]: styles.scrollArea },
    { [`& .${gridClasses['scrollArea--left']}`]: styles['scrollArea--left'] },
    { [`& .${gridClasses['scrollArea--right']}`]: styles['scrollArea--right'] },
    { [`& .${gridClasses.selectedRowCount}`]: styles.selectedRowCount },
    { [`& .${gridClasses.sortIcon}`]: styles.sortIcon },
    { [`& .${gridClasses.withBorder}`]: styles.withBorder },
    styles.root,
  ],
})(({ theme }) => {
  const borderColor =
    theme.palette.mode === 'light'
      ? lighten(alpha(theme.palette.divider, 1), 0.88)
      : darken(alpha(theme.palette.divider, 1), 0.68);

  let gridStyle: CSSInterpolation = {
    flex: 1,
    boxSizing: 'border-box',
    position: 'relative',
    border: `1px solid ${borderColor}`,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    ...theme.typography.body2,
    outline: 'none',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    [`&.${gridClasses.autoHeight}`]: {
      height: 'auto',
    },
    [`& .${gridClasses.main}`]: {
      position: 'relative',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    [`& .${gridClasses.overlay}`]: {
      display: 'flex',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: alpha(
        theme.palette.background.default,
        theme.palette.action.disabledOpacity,
      ),
    },
    [`& .${gridClasses.columnsContainer}`]: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      borderBottom: `1px solid ${borderColor}`,
    },
    [`& .${gridClasses.scrollArea}`]: {
      position: 'absolute',
      top: 0,
      zIndex: 101,
      width: 20,
      bottom: 0,
    },
    [`& .${gridClasses['scrollArea--left']}`]: {
      left: 0,
    },
    [`& .${gridClasses['scrollArea--right']}`]: {
      right: 0,
    },
    [`& .${gridClasses.columnHeaderWrapper}`]: {
      display: 'flex',
      alignItems: 'center',
    },
    [`& .${gridClasses.columnHeader}, & .${gridClasses.cell}`]: {
      WebkitTapHighlightColor: 'transparent',
      lineHeight: null,
      padding: '0 10px',
      boxSizing: 'border-box',
    },
    [`& .${gridClasses.columnHeader}:focus-within, & .${gridClasses.cell}:focus-within`]: {
      outline: `solid ${alpha(theme.palette.primary.main, 0.5)} 1px`,
      outlineWidth: 1,
      outlineOffset: -1,
    },
    [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.cell}:focus`]: {
      outline: `solid ${theme.palette.primary.main} 1px`,
    },
    [`& .${gridClasses.columnHeaderCheckbox}, & .${gridClasses.cellCheckbox}`]: {
      padding: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    [`& .${gridClasses.columnHeader}`]: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    [`& .${gridClasses['columnHeader--sorted']} .${gridClasses.iconButtonContainer}`]: {
      visibility: 'visible',
      width: 'auto',
    },
    [`& .${gridClasses.columnHeader}:not(.${gridClasses['columnHeader--sorted']}) .${gridClasses.sortIcon}`]:
      {
        opacity: 0,
        transition: theme.transitions.create(['opacity'], {
          duration: theme.transitions.duration.shorter,
        }),
      },
    [`& .${gridClasses.columnHeader}:not(.${gridClasses['columnHeader--sorted']}):hover .${gridClasses.sortIcon}`]:
      {
        opacity: 0.5,
      },
    [`& .${gridClasses.columnHeaderTitleContainer}`]: {
      display: 'flex',
      alignItems: 'center',
      minWidth: 0,
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      padding: '0 6px',
    },
    [`& .${gridClasses.iconButtonContainer}`]: {
      display: 'flex',
      visibility: 'hidden',
      width: 0,
    },
    [`& .${gridClasses.sortIcon}, & .${gridClasses.filterIcon}`]: {
      fontSize: 'inherit',
    },
    [`& .${gridClasses['columnHeader--sortable']}`]: {
      cursor: 'pointer',
    },
    [`& .${gridClasses['columnHeader--alignCenter']} .${gridClasses.columnHeaderTitleContainer}`]: {
      justifyContent: 'center',
    },
    [`& .${gridClasses['columnHeader--alignRight']} .${gridClasses.columnHeaderDraggableContainer}, & .${gridClasses['columnHeader--alignRight']} .${gridClasses.columnHeaderTitleContainer}`]:
      {
        flexDirection: 'row-reverse',
      },
    [`& .${gridClasses['columnHeader--alignCenter']} .${gridClasses.menuIcon}, & .${gridClasses['columnHeader--alignRight']} .${gridClasses.menuIcon}`]:
      {
        marginRight: 'auto',
        marginLeft: -6,
      },
    [`& .${gridClasses.columnHeaderTitle}`]: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      fontWeight: theme.typography.fontWeightMedium,
    },
    [`& .${gridClasses['columnHeader--moving']}`]: {
      backgroundColor: theme.palette.action.hover,
    },
    [`& .${gridClasses.columnSeparator}`]: {
      position: 'absolute',
      right: -12,
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: borderColor,
    },
    [`& .${gridClasses['columnSeparator--resizable']}`]: {
      cursor: 'col-resize',
      touchAction: 'none',
      '&:hover': {
        color: theme.palette.text.primary,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          color: borderColor,
        },
      },
      [`&.${gridClasses['columnSeparator--resizing']}`]: {
        color: theme.palette.text.primary,
      },
    },
    [`& .${gridClasses.iconSeparator}`]: {
      color: 'inherit',
    },
    [`& .${gridClasses.menuIcon}`]: {
      width: 0,
      visibility: 'hidden',
      fontSize: 20,
      marginRight: -6,
      display: 'flex',
      alignItems: 'center',
    },
    [`& .${gridClasses.columnHeader}:hover`]: {
      [`& .${gridClasses.iconButtonContainer}`]: {
        visibility: 'visible',
        width: 'auto',
      },
      [`& .${gridClasses.menuIcon}`]: {
        width: 'auto',
        visibility: 'visible',
      },
    },
    [`.${gridClasses.menuOpen}`]: {
      visibility: 'visible',
    },
    [`& .${gridClasses.columnHeaderWrapper}.scroll .${gridClasses.columnHeader}:last-child`]: {
      borderRight: 'none',
    },
    [`& .${gridClasses.row}`]: {
      display: 'flex',
      width: 'fit-content',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&.Mui-selected': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        '&:hover': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity,
            ),
          },
        },
      },
    },
    [`& .${gridClasses.cell}`]: {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      borderBottom: `1px solid ${borderColor}`,
    },
    [`& .${gridClasses.cell}.${gridClasses['cell--editing']}`]: {
      padding: 1,
      display: 'flex',
      boxShadow: theme.shadows[2],
      backgroundColor: theme.palette.background.paper,
      '&:focus-within': {
        outline: `solid ${theme.palette.primary.main} 1px`,
        outlineOffset: '-1px',
      },
    },
    [`& .${gridClasses['row--editing']}`]: {
      boxShadow: theme.shadows[2],
    },
    [`& .${gridClasses['row--editing']} .${gridClasses.cell}`]: {
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.background.paper,
    },
    [`& .${gridClasses.editInputCell}`]: {
      ...theme.typography.body2,
      padding: '1px 0',
      '& input': {
        padding: '0 16px',
        height: '100%',
      },
    },
    [`& .${gridClasses.editBooleanCell}`]: {
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    [`& .${gridClasses.booleanCell}[data-value="true"]`]: {
      color: theme.palette.text.secondary,
    },
    [`& .${gridClasses.booleanCell}[data-value="false"]`]: {
      color: theme.palette.text.disabled,
    },
    [`& .${gridClasses.actionsCell}`]: {
      display: 'inline-flex',
      alignItems: 'center',
      gridGap: theme.spacing(1),
    },
    // The very last cell
    [`& .${gridClasses.columnHeaderWrapper} .${gridClasses.cell}`]: {
      borderBottom: 'none',
    },
    [`& .${gridClasses['cell--withRenderer']}`]: {
      display: 'flex',
      alignItems: 'center',
    },
    [`& .${gridClasses.withBorder}`]: {
      borderRight: `1px solid ${borderColor}`,
    },
    [`& .${gridClasses['cell--textLeft']}`]: {
      textAlign: 'left',
    },
    [`& .${gridClasses['cell--textLeft']}.${gridClasses['cell--withRenderer']}, & .${gridClasses['cell--textLeft']}.${gridClasses['cell--editing']}`]:
      {
        justifyContent: 'flex-start',
      },
    [`& .${gridClasses['cell--textRight']}`]: {
      textAlign: 'right',
    },
    [`& .${gridClasses['cell--textRight']}.${gridClasses['cell--withRenderer']}, & .${gridClasses['cell--textRight']}.${gridClasses['cell--editing']}`]:
      {
        justifyContent: 'flex-end',
      },
    [`& .${gridClasses['cell--textCenter']}`]: {
      textAlign: 'center',
    },
    [`& .${gridClasses['cell--textCenter']}.${gridClasses['cell--withRenderer']}, & .${gridClasses['cell--textCenter']}.${gridClasses['cell--editing']}`]:
      {
        justifyContent: 'center',
      },
    [`& .${gridClasses.rowCount}, & .${gridClasses.selectedRowCount}`]: {
      alignItems: 'center',
      display: 'flex',
      margin: theme.spacing(0, 2),
    },
    [`& .${gridClasses.footerContainer}`]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: 52, // Match TablePagination min height
      [`& .${gridClasses.selectedRowCount}`]: {
        visibility: 'hidden',
        width: 0,
        height: 0,
        [theme.breakpoints.up('sm')]: {
          visibility: 'visible',
          width: 'auto',
          height: 'auto',
        },
      },
    },
    [`& .${gridClasses.columnHeaderDropZone} .${gridClasses.columnHeaderDraggableContainer}`]: {
      cursor: 'move',
    },
    [`& .${gridClasses.columnHeaderDraggableContainer}`]: {
      display: 'flex',
      width: '100%',
    },
    [`& .${gridClasses['columnHeader--dragging']}`]: {
      background: theme.palette.background.paper,
      padding: '0 12px',
      borderRadius: theme.shape.borderRadius,
      opacity: theme.palette.action.disabledOpacity,
    },
  };

  if (theme.palette.mode === 'dark') {
    // Values coming from mac OS.
    const track = '#202022';
    const thumb = '#585859';
    const active = '#838384';

    // We style the scroll bar for dark mode.
    gridStyle = {
      ...gridStyle,
      scrollbarColor: `${thumb} ${track}`,
      '& *::-webkit-scrollbar': {
        backgroundColor: track,
      },
      '& *::-webkit-scrollbar-thumb': {
        borderRadius: 8,
        backgroundColor: thumb,
        minHeight: 24,
        border: `3px solid ${track}`,
      },
      '& *::-webkit-scrollbar-thumb:focus': {
        backgroundColor: active,
      },
      '& *::-webkit-scrollbar-thumb:active': {
        backgroundColor: active,
      },
      '& *::-webkit-scrollbar-thumb:hover': {
        backgroundColor: active,
      },
      '& *::-webkit-scrollbar-corner': {
        backgroundColor: track,
      },
    };
  }
  return gridStyle;
});
