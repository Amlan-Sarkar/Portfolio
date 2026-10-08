const portfolioData = {
  personalInfo: {
    name: "Amlan Sarkar",
    handle: "@amlansarkar",
    tagline: "B.Tech CSE Student · Data Analytics · Python · SQL",
    role: "CSE Undergrad",
    location: "Ranchi, Jharkhand, India",
    timezone: "Asia/Kolkata",
    utcOffset: "+05:30",
    phone: "+91 62991-05883",
    email: "amlan.sarkar404@gmail.com",
    linkedin: "https://www.linkedin.com/in/amlansarkar-",
    github: "https://github.com/Amlan-Sarkar"
  },

  about: {
    title: "About Me",
    description:
      "B.Tech Computer Science & Engineering student specializing in Data Science. I work with Python, SQL, data analysis, visualization, feature engineering, and machine learning to turn raw data into meaningful insights and practical solutions."
  },

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Sarala Birla University",
      location: "Jharkhand, India",
      duration: "Aug 2023 – Present",
      specialization: "Data Science",
      cgpa: "7.65 / 10"
    }
  ],

  experience: [
    {
      role: "Data Analytics Intern",
      company: "IBM SkillsBuild | AICTE",
      duration: "Aug 2026 – Sep 2026",
      link: "",
      description: [
        "Analyzed 14,204 sales records across 1,559 products and 10 outlets to identify sales drivers and predict item-level outlet sales.",
        "Performed data cleaning, exploratory data analysis, visualization, and feature engineering to uncover retail sales patterns and business insights.",
        "Delivered an interactive Streamlit application covering sales prediction, model performance, methodology, and feature-importance analysis."
      ],
      skills: [
        "Python",
        "SQL",
        "Pandas",
        "NumPy",
        "Data Cleaning",
        "EDA",
        "Data Visualization",
        "Feature Engineering",
        "Streamlit"
      ]
    },

    {
      role: "Machine Learning Intern",
      company: "IIIT Ranchi (IEEE Sponsored)",
      duration: "May 2026 – Jul 2026",
      link: "",
      description: [
        "Developed an end-to-end stock market prediction system using historical stock data, return-based features, and a 60-day lookback window.",
        "Built and evaluated six forecasting approaches: BiLSTM, GRU, XGBoost, Random Forest, Linear Regression, and a weighted Ensemble using RMSE, MAE, MAPE, R², and directional accuracy.",
        "Achieved R² of 0.8510 with BiLSTM and Random Forest and integrated SHAP-based interpretability into an interactive Streamlit dashboard."
      ],
      skills: [
        "Python",
        "Machine Learning",
        "BiLSTM",
        "GRU",
        "XGBoost",
        "Random Forest",
        "SHAP",
        "Streamlit"
      ]
    }
  ],

  projects: [
    {
      title: "BigMart Sales Intelligence & Prediction",
      category: "Data Analytics & Machine Learning",
      banner: "assets/bigmart-sales-banner.svg",
      summary:
        "End-to-end retail sales analysis and prediction combining exploratory data analysis, feature engineering, machine learning, and an interactive Streamlit dashboard.",
      descriptions: [
        "Analyzed 14,204 records(train and test combined) across 1,559 products and 10 outlets using Python, Pandas, NumPy, and data visualization.",
        "Performed data cleaning, exploratory data analysis, visualization, and feature engineering to identify retail sales patterns and business insights.",
        "Compared Linear Regression, Random Forest, Extra Trees, XGBoost, and LightGBM using grouped 5-fold cross-validation, grouping by Item Identifier to evaluate generalization to unseen products.",
        "Selected Extra Trees Regressor, achieving a holdout R² of 0.6194 and MAE of ₹711.53. Grouped cross-validation achieved a mean R² of 0.5982 and MAE of ₹757.",
        "Identified Outlet Type, MRP Segment, and Item MRP as the strongest sales drivers and developed a Streamlit app for sales prediction, model evaluation, and feature-importance analysis."
      ],
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Extra Trees",
        "XGBoost",
        "LightGBM",
        "Streamlit"
      ],
      link: "https://bigmart-sales-intelligence-amlan-sarkar.streamlit.app/",
      github: "https://github.com/Amlan-Sarkar/BigMart-Sales-Intelligence"
    },

    {
      title: "Stock Market Prediction System",
      category: "Machine Learning & Analytics",
      banner: "assets/stock-prediction-banner.svg",
      summary:
        "Interactive stock market prediction dashboard comparing deep learning, ensemble, and traditional machine learning approaches using return-based features.",
      descriptions: [
        "Developed an interactive Streamlit dashboard for comparing multiple stock forecasting approaches and analyzing model performance.",
        "Built and evaluated BiLSTM, GRU, XGBoost, Random Forest, Linear Regression, and weighted Ensemble models.",
        "Rebuilt the prediction pipeline around stationary, return-based features with a 60-day lookback after diagnosing MinMaxScaler extrapolation issues.",
        "Evaluated forecasting performance using RMSE, MAE, MAPE, R², and directional accuracy.",
        "Applied SHAP explainability to interpret feature contributions and understand model predictions."
      ],
      techStack: [
        "Python",
        "Streamlit",
        "BiLSTM",
        "GRU",
        "XGBoost",
        "Random Forest",
        "SHAP"
      ],
      link: "https://stock-market-prediction-amlan-sarkar.streamlit.app/",
      github: "https://github.com/Amlan-Sarkar/Stock-Market-Prediction"
    },

    {
      title: "Parkinson's Disease Detection System",
      category: "Machine Learning",
      banner: "assets/parkinsons-detection-banner.svg",
      summary:
        "Machine learning classification system for Parkinson's disease detection using preprocessing, dimensionality reduction, class-imbalance handling, and ensemble classification.",
      descriptions: [
        "Worked with the UCI Parkinson's dataset containing 195 observations and 24 features.",
        "Applied RandomOverSampler for class-imbalance handling and MinMaxScaler with a range of -1 to 1 for feature normalization.",
        "Applied PCA to reduce the feature space to 8 components while retaining 95% of the variance.",
        "Compared multiple classification algorithms and developed a VotingClassifier ensemble for final classification.",
        "Authored a complete project report covering problem definition, preprocessing, methodology, model evaluation, results, and conclusions."
      ],
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "PCA",
        "RandomOverSampler",
        "VotingClassifier"
      ],
    }
  ],

  skills: {
    languages: [
      {
        name: "Python",
        level: "Primary"
      },
      {
        name: "SQL",
        level: "Intermediate"
      }
    ],

    dataAnalysis: [
      "Microsoft Excel",
      "SQL",
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization"
    ],

    machineLearning: [
      "Scikit-Learn",
      "XGBoost",
      "Feature Engineering",
      "Predictive Modeling",
      "Model Evaluation",
      "Cross-Validation",
      "SHAP Explainability"
    ],

    frameworksAndTools: [
      "Streamlit",
      "Pandas",
      "NumPy",
      "VS Code",
      "Jupyter Notebook",
      "Git",
      "GitHub"
    ],

    csFundamentals: [
      "Data Structures & Algorithms",
      "DBMS",
      "Object-Oriented Programming",
      "Computer Networks"
    ],

    softSkills: [
      "Analytical Thinking",
      "Problem Solving",
      "Communication",
      "Attention to Detail",
      "Adaptability"
    ]
  },

  certifications: [
    {
      name: "Getting Started with Data",
      issuer: "IBM SkillsBuild",
      category: "Data Analytics",
      credentialUrl: "https://www.credly.com/badges/6a72de4c-587a-45cd-bbb9-4e68d44b3753/public_url"
    },
    {
      name: "Data Fundamentals",
      issuer: "IBM SkillsBuild",
      category: "Data Analytics",
      credentialUrl: "https://www.credly.com/badges/5e4bad80-53e8-4d69-8c6a-b7ed1d6602c1/public_url"
    },
    {
      name: "Generative AI Essentials: Using LLMs to Work with Data",
      issuer: "IBM SkillsBuild",
      category: "Generative AI",
      credentialUrl: "https://www.credly.com/badges/79be1f7b-18ce-4c6a-9705-359d46a0c8a1/public_url"
    },
    {
      name: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      category: "Data Analytics",
      credentialUrl: "https://www.credly.com/badges/c72d67a3-614e-41be-b868-4e2d2920bed6/public_url"
    },
    {
      name: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      category: "Data Science",
      credentialUrl: "https://www.credly.com/badges/cb0b49bb-162a-4958-940e-ad9a04a7d08b/public_url"
    },
    {
      name: "Find Insights with AI",
      issuer: "Cisco Networking Academy",
      category: "Artificial Intelligence",
      credentialUrl: "https://www.credly.com/badges/99109996-11ce-42f7-8460-d11c29aa8920/public_url"
    },
    {
      name: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      category: "Python",
      credentialUrl: "https://www.credly.com/badges/8184041a-20fe-4c68-a939-11e272c2e26c/public_url"
    },
    {
      name: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      category: "Artificial Intelligence",
      credentialUrl: "https://www.credly.com/badges/1398700b-063c-48a5-807c-e2fe04aebaaa/public_url"
    }
  ],

  interests: [
    "Gaming",
    "Music",
    "Football",
    "Badminton"
  ]
};