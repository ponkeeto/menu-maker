'use client'
import styles from '../app/page.module.css'
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { changeTitle } from '@/redux/slices/titleSlice';

export const Title = () => {
  const { title } = useAppSelector((state) => state.title);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.center}>
      <input
        type='text'
        value={title}
        onChange={(e) => dispatch(changeTitle(e.target.value))}
        className={styles.input}
      />
      <p>You can edit the title to your restaurant name!</p>
    </div>
  );
};
