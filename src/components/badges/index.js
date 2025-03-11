import JavascriptIcon from '@/components/icons/JavascriptIcon'
import DockerIcon from '@/components/icons/DockerIcon'
import NextjsIcon from '@/components/icons/NextjsIcon'
import NodejsIcon from '@/components/icons/NodejsIcon'
import CppIcon from '@/components/icons/CppIcon'
import MongoDBIcon from '@/components/icons/MongoDB'
import AWSIcon from '@/components/icons/AWSIcon'
import BashIcon from '@/components/icons/BashIcon'
import GitIcon from '@/components/icons/GitIcon'
import LinuxIcon from '@/components/icons/LinuxIcon'
import MySqlIcon from '@/components/icons/MySqlIcon'
import JavaIcon from '@/components/icons/JavaIcon'
import PythonIcon from '@/components/icons/PythonIcon'
import ReactIcon from '@/components/icons/ReactIcon'
import CIcon from '@/components/icons/CIcon'
import VSCodeIcon from '../icons/VSCodeIcon'
import VimIcon from '../icons/VimIcon'
import VerilogIcon from '../icons/VerilogIcon'

const iconSize = 18
export const BADGES = {
  languages: {
    javaScript: {
      name: 'JavaScript',
      textColor: '#000',
      bgColor: '#f0db4f',
      icon: <JavascriptIcon height={iconSize} />
    },
    c: {
      name: 'C',
      textColor: '#fff',
      bgColor: '#868e96',
      icon: <CIcon height={iconSize} />
    },
    cpp: {
      name: 'C++',
      textColor: '#fff',
      bgColor: '#1c71d8',
      icon: <CppIcon height={iconSize} />
    },
    java: {
      name: 'Java',
      textColor: '#fff',
      bgColor: '#434c5e',
      icon: <JavaIcon height={iconSize} />
    },
    python: {
      name: 'Python',
      textColor: '#fff',
      bgColor: '#00546B',
      icon: <PythonIcon height={iconSize} />
    },
    bash: {
      name: 'Bash',
      textColor: '#fff',
      bgColor: '#5c940d',
      icon: <BashIcon height={iconSize} />
    },

    verilog: {
      name: 'Verilog',
      textColor: '#000',
      bgColor: '#f3d9fa',
      icon: <VerilogIcon height={iconSize + 8} />
    }
  },
  frameworks: {
    nextjs: {
      name: 'Next.js',
      textColor: '#fff',
      bgColor: '#000',
      icon: <NextjsIcon height={iconSize} />
    },
    react: {
      name: 'React',
      textColor: '#fff',
      bgColor: '#087EA4',
      icon: <ReactIcon height={iconSize} />
    },
    nodejs: {
      name: 'Node.js',
      textColor: '#fff',
      bgColor: '#68a063',
      icon: <NodejsIcon height={iconSize} />
    },
    zephyrrtos: {
      name: 'Zephyr RTOS',
      textColor: '#fff',
      bgColor: '#9c36b5',
      icon: <></>
    }
  },
  tools: {
    docker: {
      name: 'Docker',
      textColor: '#fff',
      bgColor: '#008fe2',
      icon: <DockerIcon height={iconSize} strokeWidth="2" />
    },
    git: {
      name: 'Git',
      textColor: '#fff',
      bgColor: '#DE4C36',
      icon: <GitIcon height={iconSize} />
    },
    linux: {
      name: 'Linux',
      textColor: '#000',
      bgColor: '#ffb300',
      icon: <LinuxIcon height={iconSize} />
    },
    vim: {
      name: 'Vim',
      textColor: '#000',
      bgColor: '#8ce99a',
      icon: <VimIcon height={iconSize} />
    },
    vscode: {
      name: 'VSCode',
      textColor: '#fff',
      bgColor: '#212529',
      icon: <VSCodeIcon height={iconSize} />
    }
  },
  databases: {
    mongodb: {
      name: 'MongoDB',
      textColor: '#fff',
      bgColor: '#66a80f',
      icon: <MongoDBIcon height={iconSize} />
    },
    mysql: {
      name: 'MySQL',
      textColor: '#fff',
      bgColor: '#1864ab',
      icon: <MySqlIcon height={iconSize} />
    }
  },
  cloud: {
    aws: {
      name: 'Amazon Web Services',
      textColor: '#fff',
      bgColor: '#252f3e',
      icon: <AWSIcon height={iconSize} />
    }
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
    height: iconSize + 12,
    color: textColor
  }

  return (
    <b><span style={style}>{children}</span></b>
  )
}
