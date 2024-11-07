import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';  // Import Link for navigation
import styles from './styles.module.css';

// Import Material Icons
import TerrainIcon from '@mui/icons-material/Terrain';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const FeatureList = [
    {
        title: '1.前期准备',
        Icon: TerrainIcon,  // Material Icon reference
        url: "/docs/category/前期准备",
        description: (
            <>
                在开始一切之前，你要决定是否要离开这个自己生活了多年的国家去到一个陌生的国度。保研/留学，放弃当下的工作，较长时间离开自己的男/女朋友和家人，都是你要考虑的问题。
            </>
        ),
    },
    {
        title: '2. 学校申请',
        Icon: SchoolIcon,  // Material Icon reference
        url: "/docs/category/学校申请",
        description: (
            <>
                当你决定好后，便可以开始准备语言考试，准备申请（是否找中介），选国家，选校，撰写文书，递交申请并收到offer。
            </>
        ),
    },
    {
        title: '3. 国外生活',
        Icon: PublicIcon,  // Material Icon reference
        url: "/docs/category/国外生活",
        description: (
            <>
                来到新的国家后，你要解决衣（购物），食（买菜），住（租房），行（公共交通/买车/租车）等一些列问题。
            </>
        ),
    },
    {
        title: '4. 刷题面试',
        Icon: CodeIcon,  // Material Icon reference
        url: "/docs/category/刷题面试",
        description: (
            <>
                面试是你在美国职场中迈出的关键一步。同时也是所有步骤中最困难的一步，毕竟这一步才是真正要用英语交流，并获得异国他乡生活的入场券的第一步，你可能会经历焦虑，崩溃以及质疑自己，请相信自己一定会成功。
            </>
        ),
    },
    {
        title: '5. 职业发展',
        Icon: WorkIcon,  // Material Icon reference
        url: "/docs/category/职业发展",
        description: (
            <>
                恭喜，你完成了最困难的一步！不论进入大厂或是小厂都有各自的好处，也许你更喜欢Work Life Balance (WLB)，又或者你更重视TC，都是不错的选择！
            </>
        ),
    },
    {
        title: '6. 绿卡申请',
        Icon: AssignmentTurnedInIcon,  // Material Icon reference
        url: "/docs/category/绿卡申请",
        description: (
            <>
                在美工作的终极目标之一可能是拿到绿卡，确保你能在美国长期工作和生活。这是将使一条漫长的马拉松（～5年），但也许过程远比结果更重要。
            </>
        ),
    },
];

function Feature({ Icon, title, description, url }) {
    return (
        <div className={clsx('col col--4')} style={{
            marginBottom: "1rem",
            marginTop: "1rem",
        }}>
            <Link to={url} className={styles.cardLink} style={{ textDecoration: 'none' }}>
                <div className={clsx('card', styles.featureCard)}>
                    <div className="card__image text--center">
                        <Icon className={styles.featureSvg} role="img" style={{ fontSize: '3rem' }} />
                    </div>
                    <div className="card__body text--center padding-horiz--md">
                        <Heading as="h3">{title}</Heading>
                        <p>{description}</p>
                    </div>
                    <div className="card__footer text--center">
                        <Link to={url} className="button button--primary">Read More</Link>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
