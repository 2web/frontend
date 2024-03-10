import Content from '@components/Layout/Content/Content';
import UserContent from '@components/UserContent/UserContent';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Ambassador.module.scss';
import { pushAmbassador } from '@/services/redux/slices/ambassadors/ambassadors';
import { useAppDispatch } from '@/services/typeHooks';
import AmbassadorProfile from '@/components/UserContent/AmbassadorProfile/AmbassadorProfile';
import CommentCard from '@/components/UserContent/CommentCard/CommentCard';
// import { RootState } from '@/services/redux/store';

const Ambassador = () => {
  // const ambassadors = useAppSelector((state: RootState) => state.ambassadors);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(pushAmbassador(id));
    }
  }, [id, dispatch]);

  // if (ambassadors.isLoading || !ambassadors.ambassador) return null;

  return (
    <>
      <div style={{ gridArea: 'controls', height: '76px' }} />
      <Content className={styles.ambassadorPage}>
        <AmbassadorProfile />
        <CommentCard />
        <UserContent />
      </Content>
    </>
  );
};

export default Ambassador;
