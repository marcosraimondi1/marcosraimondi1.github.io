import JavascriptIcon from '@/components/icons/JavascriptIcon'
import DockerIcon from '@/components/icons/DockerIcon'
import NextjsIcon from '@/components/icons/NextjsIcon'
import NodejsIcon from '@/components/icons/NodejsIcon'
import CppIcon from '@/components/icons/CppIcon'
import MongoDBIcon from '@/components/icons/MongoDB'
import AWSIcon from '../icons/AWSIcon'
import BashIcon from '../icons/BashIcon'
import GitIcon from '../icons/GitIcon'
import LinuxIcon from '../icons/LinuxIcon'
import MySqlIcon from '../icons/MySqlIcon'
import JavaIcon from '../icons/JavaIcon'
import PythonIcon from '../icons/PythonIcon'
import ReactIcon from '../icons/ReactIcon'

const iconSize = 20
export const BADGES = {
  javaScript: {
    name: 'JavaScript',
    textColor: '#000',
    bgColor: '#f0db4f',
    icon: <JavascriptIcon height={iconSize} />
  },
  nextjs: {
    name: 'Next.js',
    textColor: '#fff',
    bgColor: '#000',
    icon: <NextjsIcon height={iconSize} />
  },
  docker: {
    name: 'Docker',
    textColor: '#fff',
    bgColor: '#008fe2',
    icon: <DockerIcon height={iconSize} strokeWidth="2" />
  },
  nodejs: {
    name: 'Node.js',
    textColor: '#fff',
    bgColor: '#68a063',
    icon: <NodejsIcon height={iconSize} />
  },
  cpp: {
    name: 'C++',
    textColor: '#fff',
    bgColor: '#1c71d8',
    icon: <CppIcon height={iconSize} />
  },
  mongodb: {
    name: 'MongoDB',
    textColor: '#fff',
    bgColor: '#66a80f',
    icon: <MongoDBIcon height={iconSize} />
  },
  zephyrrtos: {
    name: 'Zephyr RTOS',
    textColor: '#fff',
    bgColor: '#9c36b5',
    icon: <></>
  },
  aws: {
    name: 'AWS',
    textColor: '#fff',
    bgColor: '#252f3e',
    icon: <AWSIcon height={iconSize}></AWSIcon>
  },
  bash: {
    name: 'Bash',
    textColor: '#fff',
    bgColor: '#5c940d',
    icon: <BashIcon height={iconSize}></BashIcon>
  },
  git: {
    name: 'Git',
    textColor: '#fff',
    bgColor: '#DE4C36',
    icon: <GitIcon height={iconSize}></GitIcon>
  },

  java: {
    name: 'Java',
    textColor: '#fff',
    bgColor: '#434c5e',
    icon: <JavaIcon height={iconSize}></JavaIcon>
  },

  linux: {
    name: 'Linux',
    textColor: '#fff',
    bgColor: '#ffb300',
    icon: <LinuxIcon height={iconSize}></LinuxIcon>
  },
  mysql: {
    name: 'MySQL',
    textColor: '#fff',
    bgColor: '#1864ab',
    icon: <MySqlIcon height={iconSize}></MySqlIcon>
  },
  python: {
    name: 'Python',
    textColor: '#fff',
    bgColor: '#00546B',
    icon: <PythonIcon height={iconSize}></PythonIcon>
  },
  react: {
    name: 'React',
    textColor: '#fff',
    bgColor: '#9c36b5',
    icon: <ReactIcon height={iconSize}></ReactIcon>
  }
}

export const Badge = ({ bgColor, textColor, children }) => {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '5px',
    padding: '4px 6px',
    opacity: '0.8',
    fontSize: '14px',
    gap: '6px',
    backgroundColor: bgColor,
    height: iconSize + 8,
    color: textColor
  }

  return (
    <b><span style={style}>{children}</span></b>
  )
}
