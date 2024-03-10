import { Box } from '@mui/material';
import Table from '@components/Table/Table';
import { merchTableColumns } from '@utils/constants/tableColumns';
import { merchTableRows } from '@utils/constants/tableRows';
import styles from './LoyaltyProgram.module.scss';
import LoyaltyInfo from '@components/LoyaltyInfo/LoyaltyInfo';

const LoyaltyProgram = () => {
  return (
    <Box className={styles.loyaltyProgram} component="div">
      <Table columns={merchTableColumns} rows={merchTableRows} />
      <LoyaltyInfo />
    </Box>
  );
};

export default LoyaltyProgram;
