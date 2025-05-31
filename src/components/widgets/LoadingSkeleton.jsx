import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingSkeleton = ({ quantity, count = 1, width = '100%', height = 128, wrapperClasses }) => (
  <SkeletonTheme baseColor="#010508" highlightColor="#23B5E8">
    <div className={wrapperClasses}>
      {Array.from({ length: quantity }).map((_, index) => (
        <Skeleton
          key={index}
          count={count}
          width={width}
          height={height}
          containerClassName='f-1'
        />
      ))}
    </div>
  </SkeletonTheme>
);

export default LoadingSkeleton;