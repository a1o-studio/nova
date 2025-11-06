# nova

基于 [nova-golang-template](https://github.com/a1o-studio/nova-golang-tempalte) 创建的 Go 服务项目。

## 快速开始

```bash
# 1. 复制配置文件
cp app.env.example app.env
cp docker-compose.yml.example docker-compose.yml

# 2. 修改 app.env 和 docker-compose.yml 中的配置
# 根据实际需求修改数据库名称、密码等

# 3. 安装依赖
go mod tidy

# 4. 启动数据库和 Redis
make dcup

# 5. 运行数据库迁移
make migrateup

# 6. 启动开发服务器
make dev
```

## API 文档

访问: http://localhost:4000/swagger/index.html

## 常用命令

```bash
make swag         # 生成 Swagger 文档
make sqlc         # 生成 SQLC 代码
make test         # 运行测试
make fmt          # 格式化代码
make dcdown       # 停止 Docker 服务
```
