export interface Paper {
  title: string;
  authors: string;
  venue: string;
  venueTag: string;
  links: { label: string; url: string }[];
  image?: string;
}

export interface PaperCategory {
  name: string;
  papers: Paper[];
}

export interface NewsItem {
  date: string;
  content: string;
  links?: { text: string; url: string }[];
}

export interface Award {
  title: string;
  year?: string;
}

export interface TeachingItem {
  course: string;
  period: string;
  institution: string;
}

export interface Project {
  title: string;
  description: string;
  links: { label: string; url: string }[];
}

export const newsItems: NewsItem[] = [
  {
    date: '2025.09',
    content: 'We release InternVLA-N1 with InternNav. See InternRobotics for more progress on manipulation and locomotion from our team.',
    links: [
      { text: 'InternVLA-N1', url: 'https://internrobotics.github.io/internvla-n1.github.io/' },
      { text: 'InternNav', url: 'https://github.com/InternRobotics/InternNav' },
      { text: 'InternRobotics', url: 'https://github.com/InternRobotics' },
    ],
  },
  {
    date: '2025.06',
    content: 'We release NavDP, StreamVLN, MMSI-Bench and GLEAM.',
    links: [
      { text: 'NavDP', url: 'https://wzcai99.github.io/navigation-diffusion-policy.github.io/' },
      { text: 'StreamVLN', url: 'https://streamvln.github.io/' },
      { text: 'MMSI-Bench', url: 'https://runsenxu.com/projects/MMSI_Bench/' },
      { text: 'GLEAM', url: 'https://xiao-chen.tech/gleam/' },
    ],
  },
  {
    date: '2024.07',
    content: 'We release GRUtopia, MMScan and Grounded 3D-LLM.',
    links: [
      { text: 'GRUtopia', url: 'https://github.com/OpenRobotLab/GRUtopia' },
      { text: 'MMScan', url: 'https://tai-wang.github.io/mmscan/' },
      { text: 'Grounded 3D-LLM', url: 'https://groundedscenellm.github.io/grounded_3d-llm.github.io/' },
    ],
  },
  {
    date: '2024.03',
    content: 'EmbodiedScan and GenNBV are accepted by CVPR 2024. The Challenge Server is online!',
    links: [
      { text: 'EmbodiedScan', url: 'https://tai-wang.github.io/embodiedscan/' },
      { text: 'GenNBV', url: 'https://gennbv.tech/' },
      { text: 'Server', url: 'https://huggingface.co/spaces/AGC2024/visual-grounding-2024' },
    ],
  },
  {
    date: '2024.02',
    content: 'We will host the Multi-View 3D Visual Grounding track in the Autonomous Grand Challenge.',
    links: [
      { text: 'Autonomous Grand Challenge', url: 'https://opendrivelab.com/challenge2024/' },
    ],
  },
  {
    date: '2024.01',
    content: 'UniHSI is accepted by ICLR 2024 as Spotlight.',
    links: [
      { text: 'UniHSI', url: 'https://xizaoqu.github.io/unihsi/' },
    ],
  },
  {
    date: '2023.12',
    content: 'We release EmbodiedScan, the first ego-centric, multi-modal 3D perception suite for holistic 3D scene understanding.',
    links: [
      { text: 'EmbodiedScan', url: 'https://tai-wang.github.io/embodiedscan/' },
    ],
  },
  {
    date: '2023.08',
    content: 'We release PointLLM, the first work empowering LLMs to understand point clouds with solid evaluation and benchmarks.',
    links: [
      { text: 'PointLLM', url: 'https://runsenxu.com/projects/PointLLM/' },
    ],
  },
];

export const paperCategories: PaperCategory[] = [
  {
    name: 'Navigation & Exploration',
    papers: [
      {
        title: 'VL-LN Bench: Towards Long-horizon Goal-oriented Navigation with Active Dialogs',
        authors: 'Wensi Huang, Shaohao Zhu, Meng Wei, Jinming Xu, Xihui Liu, Hanqing Wang†, Tai Wang†, Feng Zhao†, Jiangmiao Pang',
        venue: 'Arxiv Preprint',
        venueTag: 'Arxiv',
        image: '/images/vl-ln-bench.png',
        links: [
          { label: 'Project Page', url: 'https://0309hws.github.io/VL-LN.github.io/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2512.22342' },
          { label: 'Code', url: 'https://github.com/InternRobotics/VL-LN' },
          { label: '中文解读', url: 'https://mp.weixin.qq.com/s/Sbac5L2fUbnF2TBBW8O1xg' }
        ],
      },
      {
        title: 'InternVLA-N1: An Open Dual-System Vision-Language Navigation Foundation Model with Learned Latent Plans',
        authors: 'InternVLA-N1 Team',
        venue: 'ICLR 2026',
        venueTag: 'ICLR 2026',
        image: '/images/internvla-n1.png',
        links: [
          { label: 'Project Page', url: 'https://internrobotics.github.io/internvla-n1.github.io/' },
          { label: 'Tech Report', url: 'https://internrobotics.github.io/internvla-n1.github.io/static/pdfs/InternVLA_N1.pdf' },
          { label: 'DualVLN (ICLR version)', url: 'https://arxiv.org/abs/2512.08186' },
          { label: 'Code', url: 'https://github.com/InternRobotics/InternVLA-N1' },
          { label: '中文解读', url: 'https://mp.weixin.qq.com/s/0LYdp6XBOZbeqiCu8ADcYQ' }
        ],
      },
      {
        title: 'StreamVLN: Streaming Vision-and-Language Navigation via SlowFast Context Modeling',
        authors: 'Meng Wei*, Chenyang Wan*, Xiqian Yu*, Tai Wang*‡, Yuqiang Yang, Xiaohan Mao, Chenming Zhu, Wenzhe Cai, Hanqing Wang, Yilun Chen, Xihui Liu, Jiangmiao Pang',
        venue: 'ICRA 2026',
        venueTag: 'ICRA 2026',
        image: '/images/streamvln.gif',
        links: [
          { label: 'Project Page', url: 'https://streamvln.github.io/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2507.05240' },
          { label: 'Code', url: 'https://github.com/InternRobotics/StreamVLN' },
          { label: 'Zhihu', url: 'https://zhuanlan.zhihu.com/p/1914387005099451505' }
        ],
      },
      {
        title: 'LoGoPlanner: Localization Grounded Navigation Policy with Metric-aware Visual Geometry',
        authors: 'Jiaqi Peng*, Wenzhe Cai*, Yuqiang Yang*, Tai Wang†, Yuan Shen†, Jiangmiao Pang',
        venue: 'ICRA 2026 Oral',
        venueTag: 'ICRA 2026 Oral',
        image: '/images/LoGoPlanner.jpg',
        links: [
          { label: 'Project Page', url: 'https://steinate.github.io/logoplanner.github.io/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2512.19629' },
          { label: 'Code', url: 'https://github.com/InternRobotics/NavDP/tree/master/baselines/logoplanner' },
          { label: '中文解读', url: 'https://mp.weixin.qq.com/s/HnmRBUW2QvqN_QeLynNFZg' }
        ],
      },
      {
        title: 'NavDP: Learning Sim-to-Real Navigation Diffusion Policy with Privileged Information Guidance',
        authors: 'Wenzhe Cai, Jiaqi Peng, Yuqiang Yang, Yujian Zhang, Meng Wei, Hanqing Wang, Yilun Chen, Tai Wang†, Jiangmiao Pang†',
        venue: 'ICRA 2026',
        venueTag: 'ICRA 2026',
        image: '/images/NavDP.png',
        links: [
          { label: 'Project Page', url: 'https://wzcai99.github.io/navigation-diffusion-policy.github.io/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2505.08712' },
          { label: 'Code', url: 'https://github.com/InternRobotics/NavDP' },
          { label: 'Zhihu', url: 'https://zhuanlan.zhihu.com/p/1914387005099451505' }
        ],
      },
      {
        title: 'GLEAM: Learning Generalizable Exploration Policy for Active Mapping in Complex 3D Indoor Scenes',
        authors: 'Xiao Chen, Tai Wang, Quanyi Li, Tao Huang, Jiangmiao Pang, Tianfan Xue',
        venue: 'ICCV 2025',
        venueTag: 'ICCV 2025',
        image: '/images/GLEAM.gif',
        links: [
          { label: 'Project Page', url: 'https://xiao-chen.tech/gleam/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2505.20294' },
          { label: 'Code', url: 'https://github.com/zjwzcx/GLEAM' }
        ],
      },
    ],
  },
  {
    name: 'Embodied Multi-Modal 3D Perception',
    papers: [
      {
        title: 'MMSI-Video-Bench: A Holistic Benchmark for Video-based Spatial Intelligence',
        authors: 'Jingli Lin*, Runsen Xu*‡, Shaohao Zhu, Sihan Yang, Peizhou Cao, Yunlong Ran, Miao Hu, Chenming Zhu, Yiman Xie, Yilin Long, Wenbo Hu, Dahua Lin, Tai Wang†, Jiangmiao Pang†',
        venue: 'Arxiv Preprint',
        venueTag: 'Arxiv',
        image: '/images/MMSI-Video-Bench.png',
        links: [
          { label: 'Project Page', url: 'https://rbler1234.github.io/MMSI-VIdeo-Bench.github.io/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2512.10863' },
          { label: 'Code', url: 'https://github.com/InternRobotics/MMSI-Video-Bench' },
          { label: '中文解读', url: 'https://mp.weixin.qq.com/s/M4XBlVXjd3Alv5pH3h4tyw' }
        ],
      },
      {
        title: 'MMSI-Bench: A Benchmark for Multi-Image Spatial Intelligence',
        authors: 'Sihan Yang*, Runsen Xu*‡, Yiman Xie, Sizhe Yang, Mo Li, Jingli Lin, Chenming Zhu, Xiaochen Chen, Haodong Duan, Xiangyu Yue, Dahua Lin, Tai Wang†, Jiangmiao Pang†',
        venue: 'ICLR 2026',
        venueTag: 'ICLR 2026',
        image: '/images/MMSI-Bench.jpg',
        links: [
          { label: 'Project Page', url: 'https://runsenxu.com/projects/MMSI_Bench/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2505.23764' },
          { label: 'Code', url: 'https://github.com/InternRobotics/MMSI-Bench' },
          { label: '中文解读', url: 'https://mp.weixin.qq.com/s/2YAvQeGib137tjfnULpRng' }
        ],
      },
      {
        title: 'LLaVA-3D: A Simple yet Effective Pathway to Empowering LMMs with 3D-awareness',
        authors: 'Chenming Zhu, Tai Wang†, Wenwei Zhang, Jiangmiao Pang, Xihui Liu†',
        venue: 'ICCV 2025',
        venueTag: 'ICCV 2025',
        image: '/images/llava3d.png',
        links: [
          { label: 'Project Page', url: 'https://zcmax.github.io/projects/LLaVA-3D/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2409.18125' },
          { label: 'Code', url: 'https://github.com/ZCMax/LLaVA-3D' },
        ],
      },
      {
        title: 'MMScan: A Multi-Modal 3D Scene Dataset with Hierarchical Grounded Language Annotations',
        authors: 'Ruiyuan Lyu*, Tai Wang*, Jingli Lin*, Shuai Yang*, Xiaohan Mao, Yilun Chen, Runsen Xu, Haifeng Huang, Chenming Zhu, Dahua Lin, Jiangmiao Pang',
        venue: 'NeurIPS 2024',
        venueTag: 'NeurIPS 2024',
        image: '/images/mmscan.gif',
        links: [
          { label: 'Project Page', url: 'https://tai-wang.github.io/mmscan/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2406.09401' },
          { label: 'Code', url: 'https://github.com/InternRobotics/EmbodiedScan' },
        ],
      },
      {
        title: 'PointLLM: Empowering Large Language Models to Understand Point Clouds',
        authors: 'Runsen Xu, Xiaolong Wang, Tai Wang†, Yilun Chen, Jiangmiao Pang†, Dahua Lin',
        venue: 'ECCV 2024, Best Paper Candidate',
        venueTag: 'ECCV 2024 Best Paper Candidate',
        image: '/images/pointllm.gif',
        links: [
          { label: 'Project Page', url: 'https://runsenxu.com/projects/PointLLM/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2308.16911' },
          { label: 'Code', url: 'https://github.com/InternRobotics/PointLLM' },
        ],
      },
      {
        title: 'EmbodiedScan: A Holistic Multi-Modal 3D Perception Suite Towards Embodied AI',
        authors: 'Tai Wang*, Xiaohan Mao*, Chenming Zhu*, Runsen Xu, Ruiyuan Lyu, Peisen Li, Xiao Chen, Wenwei Zhang, Kai Chen, Tianfan Xue, Xihui Liu, Cewu Lu, Dahua Lin, Jiangmiao Pang',
        venue: 'CVPR 2024',
        venueTag: 'CVPR 2024',
        image: '/images/embodiedscan.gif',
        links: [
          { label: 'Project Page', url: 'https://tai-wang.github.io/embodiedscan/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2312.16170' },
          { label: 'Code', url: 'https://github.com/OpenRobotLab/EmbodiedScan' },
          { label: '中文解读', url: 'https://mp.weixin.qq.com/s/__cubd_YlvZrTvDHyLI-ow' },
        ],
      },
    ],
  },
  {
    name: 'Manipulation',
    papers: [
      {
        title: 'InternVLA-M1: A Spatially Guided Vision-Language-Action Framework for Generalist Robot Policy',
        authors: 'InternVLA-M1 Team',
        venue: 'ICLR 2026',
        venueTag: 'ICLR 2026',
        image: '/images/internvla-m1.png',
        links: [
          { label: 'Project Page', url: 'https://internrobotics.github.io/internvla-m1.github.io/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2510.13778' },
          { label: 'Code', url: 'https://github.com/InternRobotics/InternVLA-M1/tree/InternVLA-M1' },
          { label: '中文解读', url: 'https://mp.weixin.qq.com/s/JH8yObJJlrxWTqbtj3og6Q' }
        ],
      },
      {
        title: 'InternVLA-A1: Unifying Understanding, Generation and Action for Robotic Manipulation',
        authors: 'InternVLA-A1 Team',
        venue: 'Tech Report',
        venueTag: 'Tech Report',
        image: '/images/internvla-a1.png',
        links: [
          { label: 'Project Page', url: 'https://internrobotics.github.io/internvla-a1.github.io/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2601.02456' },
          { label: 'Code', url: 'https://github.com/InternRobotics/InternVLA-A1' },
          { label: '中文解读', url: 'https://mp.weixin.qq.com/s/7dRRI8nwEoz8C7Bw3rjf3w' }
        ],
      },
      {
        title: 'X-VLA: Soft-Prompted Transformer as Scalable Cross-Embodiment Vision-Language-Action Model',
        authors: 'Jinliang Zheng*, Jianxiong Li*, Zhihao Wang, Dongxiu Liu, Xirui Kang, Yuchun Feng, Yinan Zheng, Jiayin Zou, Yilun Chen, Jia Zeng, Ya-Qin Zhang, Jiangmiao Pang, Jingjing Liu, Tai Wang†, Xianyuan Zhan†',
        venue: 'ICLR 2026',
        venueTag: 'ICLR 2026',
        image: '/images/x-vla.png',
        links: [
          { label: 'Project Page', url: 'https://thu-air-dream.github.io/X-VLA/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2510.10274' },
          { label: 'Code', url: 'https://github.com/2toinf/X-VLA' },
          { label: '中文解读', url: 'https://mp.weixin.qq.com/s/IYefBawxqgJyOxNiXL0hVg' }
        ],
      },
      {
        title: 'Demystifying Action Space Design for Robotic Manipulation Policies',
        authors: 'Yuchun Feng*, Jinliang Zheng*, Zhihao Wang, Dongxiu Liu, Jianxiong Li, Jiangmiao Pang, Tai Wang†, Xianyuan Zhan†',
        venue: 'ICML 2026 & ICLR 2026 Workshop Best Paper',
        venueTag: 'ICML 2026 & ICLR 2026 Workshop Best Paper',
        image: '/images/action-space.png',
        links: [
          { label: 'Paper', url: 'https://arxiv.org/abs/2602.23408' }
        ],
      }
    ],
  },
  {
    name: 'Humanoid Agent & Simulation',
    papers: [
      {
        title: 'CooHOI: Learning Cooperative Human-Object Interaction with Manipulated Object Dynamics',
        authors: 'Jiawei Gao, Ziqin Wang, Zeqi Xiao, Jingbo Wang, Tai Wang, Jinkun Cao, Xiaolin Hu, Si Liu, Jifeng Dai, Jiangmiao Pang',
        venue: 'NeurIPS 2024, Spotlight',
        venueTag: 'NeurIPS 2024 Spotlight',
        image: '/images/coohoi.png',
        links: [
          { label: 'Paper', url: 'https://arxiv.org/abs/2406.14558' },
          { label: 'Code', url: 'https://github.com/Winston-Gu/CooHOI' },
        ],
      },
      {
        title: 'GRUtopia: Dream General Robots in a City at Scale',
        authors: 'Hanqing Wang*, Jiahe Chen*, Wensi Huang*, Qingwei Ben*, Tai Wang*, Boyu Mi*, Tao Huang, Siheng Zhao, Yilun Chen, Sizhe Yang, Peizhou Cao, Wenye Yu, Zichao Ye, Jialun Li, Junfeng Long, Zirui Wang, Huiling Wang, Ying Zhao, Zhongying Tu, Yu Qiao, Dahua Lin, Jiangmiao Pang',
        venue: 'Tech Report',
        venueTag: 'Tech Report',
        image: '/images/GRUtopia.gif',
        links: [
          { label: 'Project Page', url: 'https://github.com/OpenRobotLab/GRUtopia' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2407.10943' },
          { label: 'Code', url: 'https://github.com/OpenRobotLab/GRUtopia' },
          { label: 'Doc', url: 'https://grutopia.github.io/' },
          { label: 'Youtube', url: 'https://www.youtube.com/watch?v=fD0F1jIax5Y' },
          { label: 'bilibili', url: 'https://www.bilibili.com/video/BV1JUbxeMEsL/?buvid=XU42709457560E0722A8AA591EE792A3DAE59&from_spmid=search.search-result.0.0&is_story_h5=false&mid=vxiHfNKVdk6fb8fduRusuX8FTQ%2FSZMtL1rElX6M3iMo%3D&p=1&plat_id=116&share_from=ugc&share_medium=android&share_plat=android&share_session_id=e78b4bb6-087b-4a72-817b-b06ef91167f3&share_source=COPY&share_tag=s_i&spmid=united.player-video-detail.0.0&timestamp=1720788955&unique_k=CeKgxGI&up_id=3546722198358311&vd_source=7f685cd616faf836ed7469749c100410' },
        ],
      },
      {
        title: 'UniHSI: Unified Human-Scene Interaction via Prompted Chain-of-Contacts',
        authors: 'Zeqi Xiao, Tai Wang, Jingbo Wang, Jinkun Cao, Wenwei Zhang, Bo Dai, Dahua Lin, Jiangmiao Pang',
        venue: 'ICLR 2024, Spotlight',
        venueTag: 'ICLR 2024',
        image: '/images/unihsi.gif',
        links: [
          { label: 'Project Page', url: 'https://xizaoqu.github.io/unihsi/' },
          { label: 'Paper', url: 'https://arxiv.org/abs/2309.07918' },
          { label: 'Code', url: 'https://github.com/OpenRobotLab/UniHSI' },
        ],
      },
    ],
  },
  {
    name: 'Vision-Based 3D Perception',
    papers: [
      {
        title: 'Vision-Centric BEV Perception: A Survey',
        authors: 'Yuexin Ma*, Tai Wang*, Xuyang Bai*, Huitong Yang, Yuenan Hou, Yaming Wang, Yu Qiao, Ruigang Yang, Dinesh Manocha, Xinge Zhu',
        venue: 'TPAMI 2024',
        venueTag: 'TPAMI 2024',
        image: '/images/bev-survey.png',
        links: [
          { label: 'Paper', url: 'https://arxiv.org/abs/2208.02797' },
          { label: 'Code', url: 'https://github.com/4DVLab/Vision-Centric-BEV-Perception' },
        ],
      },
      {
        title: 'Scene as Occupancy',
        authors: 'Chonghao Sima*, Wenwen Tong*, Tai Wang, Li Chen, Silei Wu, Hanming Deng, Yi Gu, Lewei Lu, Ping Luo, Dahua Lin, Hongyang Li',
        venue: 'ICCV 2023',
        venueTag: 'ICCV 2023',
        image: '/images/occupancy.png',
        links: [
          { label: 'Paper', url: 'https://arxiv.org/abs/2306.02851' },
          { label: 'Code', url: 'https://github.com/OpenDriveLab/OccNet' },
        ],
      },
      {
        title: 'Monocular 3D Object Detection with Depth from Motion',
        authors: 'Tai Wang, Jiangmiao Pang, Dahua Lin',
        venue: 'ECCV 2022, Oral',
        venueTag: 'ECCV 2022 Oral',
        image: '/images/DfM.png',
        links: [
          { label: 'Paper', url: 'https://arxiv.org/abs/2207.12988' },
          { label: 'Code', url: 'https://github.com/Tai-Wang/Depth-from-Motion' },
          { label: 'Zhihu', url: 'https://zhuanlan.zhihu.com/p/552559901' }
        ],
      },
      {
        title: 'Probabilistic and Geometric Depth: Detecting Objects in Perspective',
        authors: 'Tai Wang, Xinge Zhu, Jiangmiao Pang, Dahua Lin',
        venue: 'CoRL 2021',
        venueTag: 'CoRL 2021',
        image: '/images/PGD.png',
        links: [
          { label: 'Paper', url: 'https://arxiv.org/abs/2107.14127' },
          { label: 'Code', url: 'https://github.com/Tai-Wang/PGD' },
          { label: 'Poster', url: 'https://openreview.net/attachment?id=bEito8UUUmf&name=poster' }
        ],
      },
      {
        title: 'FCOS3D: Fully Convolutional One-Stage Monocular 3D Object Detection',
        authors: 'Tai Wang, Xinge Zhu, Jiangmiao Pang, Dahua Lin',
        venue: 'ICCV 2021 Workshop Best Paper',
        venueTag: 'ICCV 2021 Workshop Best Paper',
        image: '/images/FCOS3D.png',
        links: [
          { label: 'Paper', url: 'https://arxiv.org/abs/2104.10956' },
          { label: 'Code', url: 'https://github.com/open-mmlab/mmdetection3d' },
          { label: 'Slides', url: 'https://drive.google.com/file/d/1mcOxavQetj0CCdP__5XQK_RZB6-VT32u/view?usp=sharing' },
          { label: 'Zhihu', url: 'https://zhuanlan.zhihu.com/p/400191167' }
        ],
      },
    ],
  },
  {
    name: 'Voxel Representation Learning in LiDAR-Based Perception',
    papers: [
      {
        title: 'Position-Guided Point Cloud Panoptic Segmentation Transformer',
        authors: 'Zeqi Xiao*, Wenwei Zhang*, Tai Wang*, Chen Change Loy, Dahua Lin, Jiangmiao Pang',
        venue: 'IJCV 2024',
        venueTag: 'IJCV 2024',
        image: '/images/p3former.png',
        links: [
          { label: 'Paper', url: 'https://arxiv.org/abs/2303.13509' },
          { label: 'Code', url: 'https://github.com/InternRobotics/P3Former' },
        ],
      },
      {
        title: 'Cylindrical and Asymmetrical 3D Convolution Networks for LiDAR Segmentation',
        authors: 'Xinge Zhu*, Hui Zhou*, Tai Wang, Fangzhou Hong, Yuexin Ma, Wei Li, Hongsheng Li, Dahua Lin',
        venue: 'CVPR 2021, Oral / TPAMI 2021',
        venueTag: 'CVPR 2021 Oral, TPAMI 2021',
        image: '/images/cylinder3d.png',
        links: [
          { label: 'Paper', url: 'https://openaccess.thecvf.com/content/CVPR2021/papers/Zhu_Cylindrical_and_Asymmetrical_3D_Convolution_Networks_for_LiDAR_Segmentation_CVPR_2021_paper.pdf' },
          { label: 'Code', url: 'https://github.com/xinge008/Cylinder3D' },
          { label: 'TPAMI version', url: 'https://ieeexplore.ieee.org/document/9495168' },
        ],
      },
      {
        title: 'Reconfigurable Voxels: A New Representation for LiDAR-Based Point Clouds',
        authors: 'Tai Wang, Xinge Zhu, Dahua Lin',
        venue: 'CoRL 2020',
        venueTag: 'CoRL 2020',
        image: '/images/reconfig.png',
        links: [
          { label: 'Paper', url: 'https://arxiv.org/abs/2004.02724' },
          { label: 'Spotlight Talk', url: 'https://www.youtube.com/watch?v=qooEVl8XF9o&t=4s' },
        ],
      },
    ],
  },
];

export const awards: Award[] = [
  { title: 'Best Paper Award of Workshop on Efficient Spatial Reasoning, ICLR 2026' },
  { title: '1st Place of AgiBot World Challenge (Manipulation Track), IROS 2025' },
  { title: 'Best Paper Award Candidate of ECCV 2024' },
  { title: 'Runner-up of Waymo Camera-Only 3D Detection Challenge, CVPR 2022' },
  { title: 'Best Paper Award of Workshop on 3D Object Detection from Images, ICCV 2021' },
  { title: '1st place of vision-only track and best PKL award, NuScenes 3D Detection Challenge, NeurIPS 2020' },
  { title: 'Runner-up of NuScenes LiDAR Segmentation Challenge, NeurIPS 2020' },
  { title: 'Gold Medal of Kaggle Competition (Top 1% of Lyft 3D Detection Challenge), NeurIPS 2019' },
  { title: 'Hong Kong PhD Fellowship (HKPFS), 2019' },
  { title: 'Chu Kochen Scholarship (Highest scholarship at Zhejiang University), 2018' },
  { title: 'Top 10 Students of ZJU (Highest honor for undergraduates/graduates), 2018' },
  { title: 'National Scholarship (1.5%), 2017-2018' },
  { title: 'First Prize in Physics Competition for Undergraduate, 2017' },
];

export const teachingItems: TeachingItem[] = [
  { course: 'Computer Vision (Undergraduate Course)', period: 'Winter 2018', institution: 'ZJU' },
  { course: 'IERG2080: Introduction to Systems Programming', period: 'Fall 2020', institution: 'CUHK' },
  { course: 'IERG2470B/ESTR2308: Probability Models and Applications (Elite Students)', period: 'Spring 2021', institution: 'CUHK' },
];

export const projects: Project[] = [
  {
    title: 'MMDetection3D',
    description:
      'The Next-Generation Platform for General 3D Detection — A versatile, open-source 3D object detection toolbox based on PyTorch.',
    links: [
      { label: 'Code', url: 'https://github.com/open-mmlab/mmdetection3d' },
      { label: 'Documentation', url: 'https://mmdetection3d.readthedocs.io/' },
    ],
  },
  {
    title: 'InternNav',
    description:
      "InternRobotics' open platform for building generalized navigation foundation models.",
    links: [
      { label: 'Code', url: 'https://github.com/InternRobotics/InternNav' },
      { label: 'Documentation', url: 'https://internrobotics.github.io/user_guide/internnav/index.html' },
    ],
  }
];
