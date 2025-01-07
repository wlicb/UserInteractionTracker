from bson import ObjectId
import hashlib

def string_to_objectid(input_string):
    # 1. 先将输入字符串进行MD5哈希
    hash_object = hashlib.md5(input_string.encode())
    hex_dig = hash_object.hexdigest()

    # 2. 取前24位（因为ObjectId需要12字节，即24位十六进制）
    hex_24 = hex_dig[:24]

    # 3. 转换为ObjectId
    return ObjectId(hex_24)

# 使用示例
my_string = "hailab_ziyi"
object_id = string_to_objectid(my_string)
print(object_id)
