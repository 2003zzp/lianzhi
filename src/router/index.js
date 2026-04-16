import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuidesView from '../views/GuidesView.vue'
import TopicsView from '../views/TopicsView.vue'
import ToolsView from '../views/ToolsView.vue'
import EthGasView from '../views/EthGasView.vue'
import FeeCompareView from '../views/FeeCompareView.vue'
import StablecoinCalcView from '../views/StablecoinCalcView.vue'
import BinanceFeesView from '../views/BinanceFeesView.vue'
import BinanceRegisterView from '../views/BinanceRegisterView.vue'
import BuyUsdtView from '../views/BuyUsdtView.vue'
import UsdtNetworkView from '../views/UsdtNetworkView.vue'
import WalletSecurityView from '../views/WalletSecurityView.vue'
import ColdVsHotWalletView from '../views/ColdVsHotWalletView.vue'
import CreateWalletBeginnerView from '../views/CreateWalletBeginnerView.vue'
import WhatIsWeb3View from '../views/WhatIsWeb3View.vue'
import ExchangeSecurityView from '../views/ExchangeSecurityView.vue'
import BinanceWithdrawalView from '../views/BinanceWithdrawalView.vue'
import CreateWalletView from '../views/CreateWalletView.vue'
import BinanceTopicView from '../views/BinanceTopicView.vue'
import WalletSecurityTopicView from '../views/WalletSecurityTopicView.vue'
import Web3TopicView from '../views/Web3TopicView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                seo: {
                    title: '链安堂 - 加密货币新手学习平台 | 币安、钱包、Web3 入门教程',
                    description: '链安堂是面向加密货币新手的实操学习平台，提供币安注册、买币、提币、钱包创建、钱包安全和 Web3 入门教程，帮助新手把开户、买币、提币和安全路径走顺。',
                    keywords: '加密货币学习,币安教程,钱包安全,Web3入门,USDT购买,区块链学习,加密货币新手,炒币教程'
                }
            }
        },
        {
            path: '/guides',
            name: 'guides',
            component: GuidesView,
            meta: {
                seo: {
                    title: '新手教程中心 - 币安注册、买币、提币、钱包与 Web3 入门 | 链安堂',
                    description: '查看链安堂新手教程中心，系统学习币安注册、USDT 购买、提币网络选择、钱包创建、钱包安全和 Web3 基础知识，按路径快速入门加密世界。',
                    keywords: '新手教程,币安注册教程,USDT购买教程,提币教程,钱包教程,Web3教程'
                }
            }
        },
        {
            path: '/topics',
            name: 'topics',
            component: TopicsView,
            meta: {
                seo: {
                    title: '专题中心 - 交易所、钱包安全与 Web3 阅读地图 | 链安堂',
                    description: '链安堂专题中心按交易所、钱包安全与 Web3 主题整理教程和问题地图，帮助新手围绕真实搜索问题连续阅读，减少跳转和踩坑。',
                    keywords: '专题中心,币安专题,钱包安全专题,Web3专题,加密货币阅读地图'
                }
            }
        },
        {
            path: '/tools',
            name: 'tools',
            component: ToolsView,
            meta: {
                seo: {
                    title: '工具中心 - ETH Gas、手续费对比、稳定币计算 | 链安堂',
                    description: '链安堂工具中心提供 ETH Gas 查询、手续费对比和稳定币计算等实用工具页面，帮助新手判断交易成本、链上交互费用和常见场景支出。',
                    keywords: 'ETH Gas 查询,手续费对比,稳定币计算器,加密工具,链上工具'
                }
            }
        },
        {
            path: '/tools/eth-gas',
            name: 'eth-gas',
            component: EthGasView,
            meta: {
                seo: {
                    title: 'ETH Gas 查询器 - 以太坊链上手续费判断指南 | 链安堂',
                    description: '了解 ETH Gas 查询器的使用逻辑，判断当前以太坊链上 Gas 费用高低，帮助你在转账、授权、兑换和跨链前估算链上交互成本。',
                    keywords: 'ETH Gas 查询,以太坊手续费,Gas 费用,链上成本,以太坊转账费用'
                }
            }
        },
        {
            path: '/tools/fee-compare',
            name: 'fee-compare',
            component: FeeCompareView,
            meta: {
                seo: {
                    title: '手续费对比 - 交易所与场景成本判断 | 链安堂',
                    description: '通过手续费对比页面理解不同交易所、不同买币和提币场景下的费用差异，帮助新手把交易成本和路径成本看清楚。',
                    keywords: '手续费对比,交易所手续费,买币手续费,提币手续费,交易成本'
                }
            }
        },
        {
            path: '/tools/stablecoin-calc',
            name: 'stablecoin-calc',
            component: StablecoinCalcView,
            meta: {
                seo: {
                    title: '稳定币计算器 - 金额、汇率与收益换算 | 链安堂',
                    description: '使用稳定币计算器快速换算稳定币金额、汇率和简单收益，帮助新手在买币、持有和转账前更直观地判断资金规模。',
                    keywords: '稳定币计算器,USDT 计算器,汇率换算,稳定币收益,金额换算'
                }
            }
        },
        {
            path: '/guides/binance-fees',
            name: 'binance-fees',
            component: BinanceFeesView,
            meta: {
                seo: {
                    title: '币安手续费怎么算？现货、合约、提币费用一次讲清 | 链安堂',
                    description: '系统了解币安手续费怎么算，区分现货手续费、合约手续费和提币费用，帮助新手按真实使用路径判断买币、交易和提币总成本。',
                    keywords: '币安手续费怎么算,币安手续费,现货手续费,合约手续费,币安提币费用'
                }
            }
        },
        {
            path: '/guides/binance-register',
            name: 'binance-register',
            component: BinanceRegisterView,
            meta: {
                seo: {
                    title: '币安注册教程：注册流程、KYC 验证和开户后下一步 | 链安堂',
                    description: '查看币安注册教程，了解官方入口、注册流程、KYC 验证、2FA 和开户后下一步，帮助新手把注册、验证和安全设置一次走顺。',
                    keywords: '币安注册教程,币安怎么注册,币安开户,币安KYC,币安2FA'
                }
            }
        },
        {
            path: '/guides/buy-usdt',
            name: 'buy-usdt',
            component: BuyUsdtView,
            meta: {
                seo: {
                    title: '如何购买 USDT：购买路径、买法区别、买完下一步 | 链安堂',
                    description: '学习如何购买 USDT，理解不同购买路径、到账位置和后续去向，帮助新手在买入前想清用途、买完后顺利衔接交易或提币。',
                    keywords: '如何购买USDT,怎么买USDT,USDT购买教程,买U教程,稳定币购买'
                }
            }
        },
        {
            path: '/guides/usdt-network',
            name: 'usdt-network',
            component: UsdtNetworkView,
            meta: {
                seo: {
                    title: 'USDT 提币网络怎么选：ERC20、TRC20、BEP20 区别 | 链安堂',
                    description: '弄清 USDT 提币网络怎么选，比较 ERC20、TRC20 和 BEP20 的支持范围、手续费和使用场景，避免提币走错链和额外损失。',
                    keywords: 'USDT提币网络怎么选,ERC20 TRC20 BEP20,USDT 网络选择,提币走哪条链'
                }
            }
        },
        {
            path: '/guides/wallet-security',
            name: 'wallet-security',
            component: WalletSecurityView,
            meta: {
                seo: {
                    title: '钱包安全入门：助记词、假站、签名授权与设备安全 | 链安堂',
                    description: '钱包安全入门教程，系统讲清助记词备份、假站识别、签名授权风险和设备安全，帮助新手守住钱包控制权和常见风险底线。',
                    keywords: '钱包安全,助记词备份,假站识别,签名授权,设备安全'
                }
            }
        },
        {
            path: '/guides/cold-vs-hot-wallet',
            name: 'cold-vs-hot-wallet',
            component: ColdVsHotWalletView,
            meta: {
                seo: {
                    title: '冷钱包和热钱包区别：适合谁、怎么分层、何时上冷钱包 | 链安堂',
                    description: '了解冷钱包和热钱包区别，判断什么资产适合热钱包日常交互，什么场景该做冷存和资产分层，帮助新手建立更稳的钱包结构。',
                    keywords: '冷钱包和热钱包区别,冷钱包,热钱包,钱包分层,资产分层'
                }
            }
        },
        {
            path: '/guides/create-wallet-beginner',
            name: 'create-wallet-beginner',
            component: CreateWalletBeginnerView,
            meta: {
                seo: {
                    title: '新手怎么创建钱包：选钱包、创建顺序、助记词备份 | 链安堂',
                    description: '新手创建钱包教程，讲清钱包用途判断、工具选择、创建顺序、助记词离线备份和小额测试，帮助你把建钱包这一步做稳。',
                    keywords: '新手怎么创建钱包,创建钱包教程,钱包助记词,钱包备份,钱包入门'
                }
            }
        },
        {
            path: '/guides/what-is-web3',
            name: 'what-is-web3',
            component: WhatIsWeb3View,
            meta: {
                seo: {
                    title: '什么是 Web3：基础概念、核心特征与实际应用 | 链安堂',
                    description: '理解什么是 Web3，从基础概念、核心特征到钱包、链上资产和实际应用出发，帮助新手更容易看懂 Web3 的真实含义和使用门槛。',
                    keywords: '什么是Web3,Web3入门,Web3基础,区块链入门,链上资产'
                }
            }
        },
        {
            path: '/guides/exchange-security',
            name: 'exchange-security',
            component: ExchangeSecurityView,
            meta: {
                seo: {
                    title: '交易所安全指南：开启 2FA、识别钓鱼、管理设备 | 链安堂',
                    description: '学习交易所安全指南，了解 2FA、反钓鱼码、设备管理和异常提醒，帮助新手把交易所账户当成资金入口来做长期安全配置。',
                    keywords: '交易所安全,2FA,反钓鱼码,设备管理,币安安全'
                }
            }
        },
        {
            path: '/guides/binance-withdrawal',
            name: 'binance-withdrawal',
            component: BinanceWithdrawalView,
            meta: {
                seo: {
                    title: '币安可以提现吗？提币、卖币、出金路径讲清 | 链安堂',
                    description: '围绕“币安可以提现吗”这个高频问题，讲清提币、卖币和出金的区别与路径，帮助新手理解资产从平台出去时该怎么判断。',
                    keywords: '币安可以提现吗,币安提币,币安卖币,币安出金,提币教程'
                }
            }
        },
        {
            path: '/guides/create-wallet',
            name: 'create-wallet',
            component: CreateWalletView,
            meta: {
                seo: {
                    title: '创建钱包教程：钱包选择、备份与小额测试流程 | 链安堂',
                    description: '查看创建钱包教程，理解钱包选择、下载来源、助记词备份和小额测试流程，帮助新手把钱包创建和后续使用路径走顺。',
                    keywords: '创建钱包教程,钱包选择,助记词备份,钱包测试,Web3钱包'
                }
            }
        },
        {
            path: '/topics/binance',
            name: 'binance-topic',
            component: BinanceTopicView,
            meta: {
                seo: {
                    title: '币安专题 - 注册、手续费、买币与提币路径 | 链安堂',
                    description: '币安专题聚合币安注册、手续费、购买 USDT、提币和安全等高频问题，帮助新手按照真实操作路径集中阅读币安相关教程。',
                    keywords: '币安专题,币安注册,币安手续费,币安提币,买USDT'
                }
            }
        },
        {
            path: '/topics/wallet-security',
            name: 'wallet-security-topic',
            component: WalletSecurityTopicView,
            meta: {
                seo: {
                    title: '钱包安全专题 - 助记词、建钱包、冷热钱包分层 | 链安堂',
                    description: '钱包安全专题聚合助记词备份、钱包创建、冷热钱包区别和常见安全误区，帮助新手建立完整的钱包安全与资产分层认知。',
                    keywords: '钱包安全专题,助记词,创建钱包,冷热钱包,钱包分层'
                }
            }
        },
        {
            path: '/topics/web3',
            name: 'web3-topic',
            component: Web3TopicView,
            meta: {
                seo: {
                    title: 'Web3 专题 - Web3 入门、钱包与链上资产路径 | 链安堂',
                    description: 'Web3 专题围绕 Web3 基础概念、钱包入门、资产使用和安全路径整理内容，帮助新手从概念走到实操，减少理解断层。',
                    keywords: 'Web3专题,Web3入门,钱包入门,链上资产,DeFi基础'
                }
            }
        }
    ],
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 80,
                behavior: 'smooth'
            }
        }
        return { top: 0 }
    }
})

export default router
