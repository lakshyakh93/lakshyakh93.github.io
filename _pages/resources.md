---
layout: page
permalink: /resources/
title: resources
description: You are what you read !
nav: true
nav_order: 6
---

# Useful (Hopefully) AI/ML Resource List

---

## (Table of Contents)

1.  [ foundational knowledge](#-foundational-knowledge)
2.  [Deep Learning Fundamentals](#-deep-learning-fundamentals)
3.  [Large Language Models (LLMs)](#-large-language-models-llms)
    * [LLM Concepts & Theory](#llm-concepts--theory)
    * [LLM Training & Fine-Tuning](#llm-training--fine-tuning)
    * [LLM Inference & Optimization](#llm-inference--optimization)
    * [LLM Application Development](#llm-application-development)
4.  [AI Agents & Autonomous Systems](#-ai-agents--autonomous-systems)
5.  [Reinforcement Learning (RL)](#-reinforcement-learning-rl)
6.  [Recommendation Systems](#-recommendation-systems)
7.  [MLOps & Deployment](#-mlops--deployment)
8.  [Convex Optimization](#-convex-optimization)
9.  [Essential Blogs & Newsletters](#-essential-blogs--newsletters)

---

## 🧠 Foundational Knowledge

These resources are essential for building a solid understanding of the core principles of Machine Learning.

* **Courses:**
    * [Machine Learning by Andrew Ng (Coursera)](https://www.coursera.org/learn/machine-learning) - The classic introductory course that has started the journey for millions of developers.
    * [Caltech's "Learning from Data" (CS156)](http://work.caltech.edu/telecourse.html) - A more theoretical and mathematically rigorous introduction to ML concepts.
* **Books:**
    * [The Elements of Statistical Learning](https://hastie.su.domains/ElemStatLearn/) - Often called the "bible" of machine learning. A comprehensive and theoretical reference.
    * [Pattern Recognition and Machine Learning (PRML)](https://www.microsoft.com/en-us/research/people/cmbishop/prml-book/) - A Bayesian perspective on machine learning. Excellent for a deep, probabilistic understanding.
    * [Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow](https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/) - A fantastic, practical guide that bridges theory with code.
* **Libraries:**
    * **[Scikit-learn](https://scikit-learn.org/stable/)**: The go-to library for classical machine learning algorithms.
    * **[NumPy](https://numpy.org/)**: The fundamental package for scientific computing in Python.
    * **[Pandas](https://pandas.pydata.org/)**: A powerful library for data manipulation and analysis.

---

## 🔥 Deep Learning Fundamentals

Resources to master the core concepts of modern deep learning.

* **Courses:**
    * [Stanford's CS231n: Convolutional Neural Networks for Visual Recognition](http://cs231n.stanford.edu/) - The definitive course for learning about computer vision and CNNs.
    * [Stanford's CS224n: NLP with Deep Learning](http://web.stanford.edu/class/cs224n/) - The best academic course for understanding Natural Language Processing from the ground up.
    * [fast.ai: Practical Deep Learning for Coders](https://course.fast.ai/) - A top-down, code-first approach that gets you building state-of-the-art models quickly.
* **Books:**
    * [Deep Learning with Python by François Chollet](https://www.manning.com/books/deep-learning-with-python-second-edition) - An intuitive, practical guide written by the creator of Keras.
    * [The Deep Learning Book](https://www.deeplearningbook.org/) - The most comprehensive theoretical textbook on the subject, by Goodfellow, Bengio, and Courville.
* **Libraries:**
    * **[PyTorch](https://pytorch.org/)**: The leading deep learning framework for research and development, known for its flexibility and Pythonic feel.
    * **[TensorFlow](https://www.tensorflow.org/) / [Keras](https://keras.io/)**: A powerful and scalable framework, excellent for production environments.

---

## 🗣️ Large Language Models (LLMs)

The epicenter of the current AI revolution. This section is broken down into key areas.

### LLM Concepts & Theory

* **Seminal Paper:**
    * [Attention Is All You Need](https://arxiv.org/abs/1706.03762) - The paper that introduced the Transformer architecture, the foundation of all modern LLMs.
* **Visual Explanations:**
    * [The Illustrated Transformer by Jay Alammar](http://jalammar.github.io/illustrated-transformer/) - A beautifully simple and visual explanation of the Transformer architecture.
    * [The Illustrated GPT-2](http://jalammar.github.io/illustrated-gpt2/) - A follow-up that explains how decoder-only models like GPT work.
* **Lectures & Blogs:**
    * [Andrej Karpathy: "Let's build GPT from scratch"](https://www.youtube.com/watch?v=kCc8FmEb1nY) - A must-watch tutorial where you code a GPT in PyTorch, line by line.
    * [Lilian Weng's Blog: "The Transformer Family"](https://lilianweng.github.io/posts/2023-01-27-the-transformer-family-v2/) - An in-depth survey of the evolution of Transformer architectures.

### LLM Training & Fine-Tuning

* **Libraries & Frameworks:**
    * **[Hugging Face Transformers](https://huggingface.co/docs/transformers/index)**: The most important library in the LLM ecosystem for accessing, training, and fine-tuning models.
    * **[Hugging Face PEFT](https://huggingface.co/docs/peft/index)**: For Parameter-Efficient Fine-Tuning techniques like LoRA, QLoRA, which make fine-tuning accessible on consumer hardware.
    * **[DeepSpeed](https://github.com/microsoft/DeepSpeed)**: A library from Microsoft for training massive models at scale.
    * **[bitsandbytes](https://github.com/TimDettmers/bitsandbytes)**: Essential for 4-bit/8-bit quantization (used in QLoRA) to reduce memory usage.

### LLM Inference & Optimization

* **Libraries & Frameworks:**
    * **[vLLM](https://github.com/vllm-project/vllm)**: A high-throughput and memory-efficient serving engine for LLMs, using innovations like PagedAttention.
    * **[TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM)**: NVIDIA's official library for optimizing and running LLMs on NVIDIA GPUs at peak performance.
    * **[llama.cpp](https://github.com/ggerganov/llama.cpp)**: A plain C/C++ implementation for running models efficiently on CPUs and local machines.
    * **[Ollama](https://ollama.com/)**: The easiest way to get up and running with open-source models locally.
* **Key Concepts:**
    * **Quantization**: Reducing the precision of model weights (e.g., from 16-bit to 4-bit) to decrease memory and increase speed.
    * **Speculative Decoding**: Using a smaller, faster model to predict tokens and a larger model to verify, speeding up inference.

### LLM Application Development

* **Frameworks:**
    * **[LangChain](https://www.langchain.com/)**: A framework for developing applications powered by language models, focusing on composition and agents.
    * **[LlamaIndex](https://www.llamaindex.ai/)**: A data framework for connecting custom data sources to LLMs, specializing in Retrieval-Augmented Generation (RAG).
    * **[OpenAI API](https://platform.openai.com/docs/api-reference)**: The industry-standard API for accessing powerful closed-source models like GPT-4.

---

## 🤖 AI Agents & Autonomous Systems

Building systems that can reason, plan, and act to accomplish goals.

* **Frameworks:**
    * **[CrewAI](https://www.crewai.com/)**: A modern framework for orchestrating role-playing, autonomous AI agents.
    * **[Microsoft AutoGen](https://microsoft.github.io/autogen/)**: A framework that enables the development of LLM applications using multiple, conversable agents.
* **Key Concepts & Papers:**
    * **[ReAct (Reason+Act) Paper](https://arxiv.org/abs/2210.03629)**: A foundational paper on prompting LLMs to generate both reasoning traces and task-specific actions.
    * **[Agentic Design Patterns](https://www.linkedin.com/pulse/agentic-design-patterns-part-1-reflections-andrew-ng-csqpc/)**: A series of articles on best practices for designing and building reliable AI agents.

---

## 🎲 Reinforcement Learning (RL)

Teaching agents to make optimal decisions through trial and error.

* **Courses:**
    * [UCL Course on RL by David Silver](https://www.davidsilver.uk/teaching/) - A foundational lecture series by a lead researcher on AlphaGo.
    * [Berkeley's CS285: Deep Reinforcement Learning](http://rail.eecs.berkeley.edu/deeprlcourse/) - A comprehensive course covering modern deep RL algorithms.
* **Books:**
    * [Reinforcement Learning: An Introduction by Sutton and Barto](http://incompleteideas.net/book/the-book-2nd.html) - The definitive textbook for RL.
* **Libraries:**
    * **[Gymnasium (formerly OpenAI Gym)](https://gymnasium.farama.org/)**: The standard toolkit for developing and comparing RL algorithms.
    * **[Stable Baselines3](https://stable-baselines3.readthedocs.io/en/master/)**: A set of reliable implementations of RL algorithms in PyTorch.

---

## 📊 Recommendation Systems

The engines behind content discovery on platforms like Netflix, YouTube, and Amazon.

* **Courses:**
    * [Recommender Systems Specialization (Coursera)](https://www.coursera.org/specializations/recommender-systems) - A practical specialization by the University of Minnesota.
* **Libraries:**
    * **[TensorFlow Recommenders (TFRS)](https://www.tensorflow.org/recommenders)**: A library for building, evaluating, and serving recommender models.
    * **[LightFM](https://github.com/lyst/lightfm)**: A popular Python implementation of a hybrid matrix factorization model.
    * **[Surprise](https://surpriselib.com/)**: A Python scikit for building and analyzing recommender systems that deal with explicit rating data.

---

## ⚙️ MLOps & Deployment

The art of taking models from prototype to production reliably and efficiently.

* **Tools & Platforms:**
    * **[MLflow](https://mlflow.org/)**: An open-source platform to manage the ML lifecycle, including experimentation, reproducibility, and deployment.
    * **[DVC (Data Version Control)](https://dvc.org/)**: Git for data. A crucial tool for versioning datasets and models.
    * **[BentoML](https://www.bentoml.com/)**: A framework for building reliable, scalable, and cost-effective AI applications.
    * **[Docker](https://www.docker.com/)**: The standard for containerizing applications, ensuring consistency from development to production.

---

## 📈 Convex Optimization

The mathematical foundation for many machine learning algorithms, crucial for understanding how and why they work.

* **Courses:**
    * [Stanford's EE364a: Convex Optimization](https://web.stanford.edu/class/ee364a/) - The legendary course taught by Stephen Boyd. The gold standard.
* **Books:**
    * [Convex Optimization by Boyd and Vandenberghe](https://web.stanford.edu/~boyd/cvxbook/) - The book that accompanies the course. Free to download.
* **Libraries:**
    * **[CVXPY](https://www.cvxpy.org/)**: A Python-embedded modeling language for convex optimization problems.

---

## 🗞️ Essential Blogs & Newsletters

Stay up-to-date with the latest breakthroughs and trends.

* **[Sebastian Raschka's "Ahead of AI"](https://magazine.sebastianraschka.com/)**: In-depth, technical breakdowns of new research papers.
* **[The Batch by DeepLearning.AI](https://www.deeplearning.ai/the-batch/)**: A weekly newsletter from Andrew Ng's team covering the most important AI news.
* **[Chin-Zou's Tech Digest](https://www.getrevue.co/profile/chipro)**: A fantastic weekly newsletter with curated papers, articles, and code.
* **[Hugging Face Blog](https://huggingface.co/blog)**: Updates, tutorials, and insights from the team at the heart of the open-source LLM movement.

---