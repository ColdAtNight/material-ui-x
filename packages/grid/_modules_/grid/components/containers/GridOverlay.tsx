import * as React from 'react';
import clsx from 'clsx';
import { unstable_composeClasses as composeClasses } from '@mui/material';
import { useGridSelector } from '../../hooks/utils/useGridSelector';
import { gridDensityHeaderHeightSelector } from '../../hooks/features/density/densitySelector';
import { useGridApiContext } from '../../hooks/utils/useGridApiContext';
import { getDataGridUtilityClass } from '../../gridClasses';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import { GridComponentProps } from '../../GridComponentProps';

export type GridOverlayProps = React.HTMLAttributes<HTMLDivElement>;

type OwnerState = { classes: GridComponentProps['classes'] };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['overlay'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

export const GridOverlay = React.forwardRef<HTMLDivElement, GridOverlayProps>(function GridOverlay(
  props: GridOverlayProps,
  ref,
) {
  const { className, style, ...other } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = { classes: rootProps.classes };
  const classes = useUtilityClasses(ownerState);
  const headerHeight = useGridSelector(apiRef, gridDensityHeaderHeightSelector);

  const windowRef = apiRef.current.windowRef?.current;
  const verticalScrollbarSize = windowRef ? windowRef.offsetWidth - windowRef.clientWidth : 0;
  const horizontalScrollbarSize = windowRef ? windowRef.offsetHeight - windowRef.clientHeight : 0;

  return (
    <div
      ref={ref}
      className={clsx(classes.root, className)}
      style={{
        top: headerHeight,
        right: verticalScrollbarSize,
        bottom: horizontalScrollbarSize,
        ...style,
      }}
      {...other}
    />
  );
});
