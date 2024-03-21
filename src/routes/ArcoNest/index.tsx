import { Helmet } from '@tokopedia/skipper/head';
import { useNavigate } from '@tokopedia/skipper/router';

import type { SkipperComponentType } from '@tokopedia/skipper/router';

import Main from '@/components/Main';

import * as styles from './arco-nest.module.css';

// Style
import '@arco-themes/react-nest-arco/css/arco.css';

// Component(s)
import { Button, Checkbox, Divider, Pagination, Space, Typography } from '@arco-design/web-react';

/**
 * @function ArcoNest
 */
const ArcoNest: SkipperComponentType = () => {
  const navigate = useNavigate();

  const { Title, Text } = Typography;

  return (
    <Main>
      <Helmet>
        <title>Arco Design System | Skipper Framework</title>
      </Helmet>

      <Space direction="vertical" size="large">
        <Typography>
          <Title heading={3}>Arco Design System</Title>
          <Text>This is POC of Arco design with Nest theme on Skipper Framework</Text>
        </Typography>

        <Space size="small">
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="outline">Outline</Button>
          <Button type="text">Text</Button>
        </Space>

        <Checkbox>Checkbox</Checkbox>

        <Pagination total={100} />

        <Divider />

        <button className={styles.ctaButton} type="button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </Space>
    </Main>
  );
};

export default ArcoNest;
